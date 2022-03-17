import React, { useState, useCallback, } from "react";
import { ActivityIndicator } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { HistoryCard } from "../../components/HistoryCard";
import { categories } from "../../utils/categories";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { VictoryPie } from "victory-native";
import { ptBR } from "date-fns/locale";
import { addMonths, subMonths, format } from "date-fns";
import { useFocusEffect } from '@react-navigation/native';
import {
  Container,
  Header,
  Title,
  Field,
  MonthSelect,
  MonthSelectButton,
  MonthSelectIcon,
  Month,
  LoadContainer,
  Text
} from "./styles";

import { useTheme } from "styled-components";

import { useAuth } from "../../hooks/auth";
import { EmptyList } from "../../components/EmptyList";

export interface TransactionData {
  type: "positive" | "negative";
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface CategoryData {
  key: string;
  name: string;
  total: number;
  totalFormatted: string;
  color: string;
  percent: string;
}

export function Resume() {
  const { user } = useAuth();
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  const theme = useTheme();
 
  const loadTransactions = async () => {
    setIsLoading(true);
    const dataKey = `@gofinances:transactions&id=${user.id}`;
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    const expensives = transactions.filter(
      (transaction: TransactionData) =>
        transaction.type === "negative" &&
        new Date(transaction.date).getMonth() === selectedDate.getMonth() &&
        new Date(transaction.date).getFullYear() === selectedDate.getFullYear()
    );

    const expensiveTotal = expensives.reduce(
      (acumullator: number, item: TransactionData) => {
        return acumullator + Number(item.amount);
      },0);

    let totalByCatogory: CategoryData[] = [];

    categories.forEach((category) => {
      let categorySum = 0;

      expensives.forEach((expensive: TransactionData) => {
        if (expensive.category === category.key) {
          categorySum += Number(expensive.amount);
        }
      });
      if (categorySum > 0) {
        const totalFormatted = categorySum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const percent = `${((categorySum / expensiveTotal) * 100).toFixed(0)}%`;

        totalByCatogory.push({
          key: category.key,
          name: category.name,
          total: categorySum,
          color: category.color,
          totalFormatted,
          percent,
        });
      }
    });
    setTotalByCategories(totalByCatogory);
    setIsLoading(false);
  };

  const handleChangeMonth = (month: "prev" | "next") => {
    if (month === "next") {
      const newDate = addMonths(selectedDate, 1);
      setSelectedDate(newDate);
    } else {
      const newDate = subMonths(selectedDate, 1);
      setSelectedDate(newDate);
    }
  };

  useFocusEffect(useCallback(() => {
    loadTransactions();
  },[selectedDate]));

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>
 
      {isLoading === false ? (
        <Field
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            padding: 20,
          }}
        >

          <MonthSelect>
            <MonthSelectButton>
              <MonthSelectIcon
                name="chevron-left"
                onPress={() => handleChangeMonth("prev")}
              />
            </MonthSelectButton>
        
            <Month>
              {format(selectedDate, "MMMM, yyyy", {
                locale: ptBR,
              })}
            </Month>

            <MonthSelectButton>
              <MonthSelectIcon
                name="chevron-right"
                onPress={() => handleChangeMonth("next")}
              />
            </MonthSelectButton>
          </MonthSelect>
          {totalByCategories.length === 0 && <EmptyList menssage={"Nenhuma transação registrada."}/>}
          <VictoryPie
            data={totalByCategories}
            colorScale={totalByCategories.map((item) => item.color)}
            style={{
              labels: {
                fontSize: RFValue(18),
                fontWeight: "bold",
                fill: theme.colors.shape,
              },
            }}
            labelRadius={50}
            x={"percent"}
            y={"total"}
          />

          {totalByCategories.map((item) => (
            <HistoryCard
              amount={item.totalFormatted}
              color={item.color}
              category={item.name}
              key={item.key}
            />
          ))}
        </Field>
      ) : (
        <LoadContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </LoadContainer>
      )}
    </Container>
  );
}

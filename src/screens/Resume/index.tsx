import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { HistoryCard } from "../../components/HistoryCard";
import { categories } from "../../utils/categories";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Container, Header, Title, Field } from "./styles";

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
  total: string;
  color: string;
}

export function Resume() {
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>(
    []
  );

  const loadTransactions = async () => {
    const dataKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    const expensives = transactions.filter((transaction: TransactionData) => {
      return transaction.type === "negative";
    });

    let totalByCatogory: CategoryData[] = [];

    categories.forEach((category) => {
      let categorySum = 0;

      expensives.forEach((expensive: TransactionData) => {
        if (expensive.category === category.key) {
          categorySum += Number(expensive.amount);
        }
      });
      if (categorySum > 0) {
        const total = categorySum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        totalByCatogory.push({
          key: category.key,
          name: category.name,
          total: total,
          color: category.color,
        });
      }
    });
    setTotalByCategories(totalByCatogory);
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      <Field>
        {
          totalByCategories.map(item => (
         
            <HistoryCard
              amount={item.total}
              color={item.color}
              category={item.name}
              key={item.key}
            />
          ))
        }
      </Field>
    </Container>
  );
}

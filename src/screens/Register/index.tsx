import React, { useState } from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';

import { useAuth } from '../../hooks/auth';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import { ModalMenssage } from '../../components/ModalMenssaeg';

import { useForm } from 'react-hook-form';

import { InputForm } from '../../components/Form/InputForm';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import  CategorySelectButton  from '../../components/Form/CategorySelectButton';
import  CategorySelect  from '../CategorySelect/index'

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
  ErrorMenssage
} from './styles';

interface FormData {
  name: string;
  amount: string;  
}

interface ModalProps {
  isActive: boolean,
  menssageType: "attention" | "success",
  menssage?: string,
}

const schema = Yup.object().shape({
  name: Yup
  .string()
  .required('Nome é obrigatório'),
  amount: Yup
  .number()
  .typeError('Informe um valor númerico')
  .positive('O valor não pode ser negativo')
  .required('O valor é obrigatório'),
});

export function Register(){
  const { user } = useAuth();
  const [transactionType, setTransactionType] = useState('');
  const [IsModalOpen, setIsModalOpen ] = useState({} as ModalProps);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  

  const handleModal = (menssage: string, menssageType: "attention" | "success") => {
    console.log("handleModal chamado!");
    setIsModalOpen({
      isActive: true,
      menssageType: menssageType,
      menssage: menssage
    });
    setTimeout(() => {
      console.log("setTimeOut chamado!");
      console.log("==================================================================");
      setIsModalOpen({
        isActive: false,
        menssageType: menssageType,
        menssage: '',
      });
    }, 3000);
  };

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });



  function handleTransactionsTypeSelect(type: 'positive' | 'negative'){
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal(){
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal(){
    setCategoryModalOpen(false);
  }



  async function handleRegister(form: FormData){
    if(!transactionType)
      return handleModal("Selecione o tipo da transação", "attention");

    if(category.key === 'category')
      return handleModal("Selecione o tipe da categoria", "attention");

    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      type: transactionType,
      category: category.key,
      date: new Date()
    }

    try {
      const dataKey = `@gofinances:transactions&id=${user.id}`;

      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [
        ...currentData,
        newTransaction
      ];

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

      reset();
      setTransactionType('');
      setCategory({
        key: 'category',
        name: 'Categoria'
      });
      handleModal("Sucesso!", "success");
      
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível salvar");
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
      <ModalMenssage isModalOpen={IsModalOpen.isActive} menssage={IsModalOpen.menssage} menssageType={IsModalOpen.menssageType}/>

        <Header>
          <Title>Cadastro</Title>
        </Header>


        <Form>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && <ErrorMenssage>{errors.name.message}</ErrorMenssage>}
            />

            <InputForm
              name="amount"
              control={control}
              placeholder="Preço"
              keyboardType="numeric"
              error={errors.amount && <ErrorMenssage>{errors.amount.message}</ErrorMenssage>}
            />

            <TransactionsTypes>
              <TransactionTypeButton
                type="up"
                title="Income"
                onPress={() => handleTransactionsTypeSelect('positive')}
                isActive={transactionType === 'positive'}
              />
              <TransactionTypeButton
                type="down"
                title="Outcome"
                onPress={() => handleTransactionsTypeSelect('negative')}
                isActive={transactionType === 'negative'}
              />
            </TransactionsTypes>

            <CategorySelectButton
              title={category.name}
              onPress={handleOpenSelectCategoryModal}
            />
          </Fields>

          <Button
            title="Enviar"
            onPress={handleSubmit(handleRegister)}
          />
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
              category={category}
              setCategory={setCategory}
              closeSelectCategory={handleCloseSelectCategoryModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>      
  );
}
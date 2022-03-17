import React from 'react';
import {Button} from 'react-native';
import Trash from '../../assets/trash.svg';

import { categories } from '../../utils/categories';

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  TrashIcon,
  CategoryName,
  Date,
  DeleteButton
} from './styles';

export interface TransactionCardProps {
  id: string,
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
};

interface Props {
  data: TransactionCardProps;
  handleDeleteTransaction: (id: string) => void
};

export function TransactionCard({ data, handleDeleteTransaction } : Props){
  
  const [ category ] = categories.filter(
    item => item.key === data.category
  );

  return (
    <Container>
      <Title>
        {data.name}
      </Title>

      <Amount type={data.type}>
        { data.type === 'negative' && '- ' }
        { data.amount }
      </Amount>

      <Footer>
        <Category>
          <Icon name= {category.icon} />
          <CategoryName>
            {category.name}
          </CategoryName>
        </Category>

        <Date>
          {data.date}
        </Date>

      <DeleteButton>
        <TrashIcon name="trash-2" onPress={()=>handleDeleteTransaction(data.id)}/>
      </DeleteButton>
     
   
      </Footer>
    </Container>
  )
}
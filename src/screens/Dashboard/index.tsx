import React from 'react';
import { 
    Conteiner,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList
 } from './styles';

import { HighlightCard } from '../../components/Highlight';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps{
    id: String
}

const data = [
    {   id: '1',
        type: 'positive',
        title: 'Desenvolvimento de site',
        amount: '12.000',
        category: {
            name: 'Vendas',
            icon: 'dollar-sign',
        },
        date: '12/12/2014'
    },

    {   
        id: '2',
        type: 'negative',
        title: 'Alugel da casa',
        amount: '800',
        category: {
            name: 'Vendas',
            icon: 'dollar-sign',
        },
        date: '30/02/2015'
    },

    {
        id: '3',
        type: 'positive',
        title: 'Gorjeta',
        amount: '100',
        category: {
            name: 'Vendas',
            icon: 'dollar-sign',
        },
        date: '12/12/2014'
    },
];

export function Dashboard(){
    return (
        <Conteiner>
           <Header>
            <UserWrapper>
                <UserInfo>
                    <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/82423216?v=4'}}/>
                    <User>
                        <UserGreeting> Olá, </UserGreeting>
                        <UserName> Rodrigo </UserName>
                    </User>
                </UserInfo>
            
            <Icon name="power"/>
            </UserWrapper>
           </Header>
            
            <HighlightCards>
                <HighlightCard type={'up'} title={'Saida'} amount={'200,00'} lasttransaction={'Dia 13 de Janeiro'}/>
                <HighlightCard type={'down'} title={'Entrada'} amount={'920,00'} lasttransaction={'Dia 30 de Fevereiro'}/>
                <HighlightCard type={'total'} title={'Total'} amount={'1000,00'} lasttransaction={'Dia 30 de Fevereiro'}/>
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>

                <TransactionList
                    data={data}
                    
                    renderItem={({item}) => <TransactionCard data={item}/>}
     
                />
                {console.log({data})}

            </Transactions>
        </Conteiner>
    )
}
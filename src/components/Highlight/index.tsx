import React from 'react';

import {
    Conteiner,
    Header,
    Title,
    Icon,
    Footer,
    Amout,
    LastTransaction,
}  from './styles';

interface Props {
    type: "up" | "down" | "total",
    title: string,
    amount: string,
    lastTransaction: string
}

const icons = {
    up: "arrow-up",
    down: "arrow-down",
    total: "dollar-sign"
};

export function HighlightCard( { title, amount, lastTransaction, type }:Props ){
    return(
        <Conteiner type={type}>
            <Header>
                <Title type={type}> {title} </Title>
                <Icon name={icons[type]} type={type}/>
            </Header>

            <Footer>
                <Amout type={type}>{ amount }</Amout>
                <LastTransaction type={type}>
                    {lastTransaction}
                </LastTransaction>
            </Footer>

        </Conteiner>
    )
}
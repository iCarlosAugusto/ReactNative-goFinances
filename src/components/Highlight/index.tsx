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
    lasttransaction: string
}

const icons = {
    up: "arrow-up",
    down: "arrow-down",
    total: "dollar-sign"
};

export function HighlightCard( { title, amount, lasttransaction, type }:Props ){
    return(
        <Conteiner type={type}>
            <Header>
                <Title type={type}> {title} </Title>
                <Icon name={icons[type]} type={type}/>
            </Header>

            <Footer>
                <Amout type={type}>{ amount }</Amout>
                <LastTransaction type={type}>
                    {lasttransaction}
                </LastTransaction>
            </Footer>

        </Conteiner>
    )
}
import React from "react";

import { Container, Title, Amount } from "./styles";

interface HistoryCardProps {
    category: string,
    amount: string,
    color: string
}

export function HistoryCard({category, amount, color} : HistoryCardProps) {
  return (
    <Container color={color}>
        <Title>{category}</Title>  
        <Amount>R$ {amount}</Amount>
    </Container>
    );
}

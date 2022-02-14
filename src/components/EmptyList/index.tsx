import React from 'react'
import {
    Container,
    Menssage
} from './styles';

export function EmptyList() {
    return (
        <Container>
           <Menssage>
                A sua lista de transações atualmente está vazia.
            </Menssage> 
        </Container>
    );
}
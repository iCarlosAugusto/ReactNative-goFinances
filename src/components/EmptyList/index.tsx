import React from 'react'
import {
    Container,
    Menssage,
    Image
} from './styles';

interface EmptyListProps {
    menssage: string;
};

export function EmptyList({menssage}: EmptyListProps) {
    return (
        <Container>
            <Image/>
           <Menssage>
                {menssage}
            </Menssage> 
        </Container>
    );
};
import React from 'react'

import {
    Container,
    Category,
    Icon
} from './styles';

interface Props{
    title: String;
    onPress: ()=> void;
}

function CategorySelectButton({ title, onPress }: Props){
    return(
        <Container onPress={onPress}>
            <Category> {title} </Category>
            <Icon name="chevron-down"/>
        </Container>
    )
}

export default CategorySelectButton;
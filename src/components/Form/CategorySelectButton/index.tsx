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

function CategorySelectButton({ title, ...rest }: Props){
    return(
        <Container {...rest}>
            <Category> {title} </Category>
            <Icon name="chevron-down"/>
        </Container>
    )
}

export default CategorySelectButton;
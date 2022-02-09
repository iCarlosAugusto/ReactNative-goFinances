import React from 'react'
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles'
import { RectButton } from 'react-native-gesture-handler';
import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends TouchableOpacityProps {
    title: string,
}

export function Button ({title, ...rest} : Props){
    return(
        <Container {...rest}>
            <Title>
                {title}
            </Title>
        </Container>
    )
}
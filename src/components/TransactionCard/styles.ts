import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

interface TypeTransactionCard{
    type: 'positive' | 'negative'
};

export const Conteiner = styled.View`
    background-color: ${(props) => props.theme.colors.shape};
    padding: 24px 17px;
    border-radius: 5px;
    font-size: 14px;
    margin-bottom: 16px;
`;
export const Title = styled.Text`
    margin-bottom: 16px;
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;
export const Amount = styled.Text<TypeTransactionCard>`
    ${(props) => props.type === 'negative' && css `
        color: ${(props) => props.theme.colors.attention}
    `};

    ${(props) => props.type === 'positive' && css`
        color: ${(props) => props.theme.colors.sucess}
    `}

    margin-top: 2px;
    font-family: ${(props) => props.theme.fonts.medium};
    font-size: ${RFValue(20)}px;
`;
export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 24px;
`;
export const Category = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const CategoryName = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${(props) => props.theme.colors.text};
    margin-left: 17px;
 
`;
export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${(props) => props.theme.colors.text};
`;

export const Date = styled.Text`
    color: ${(props) => props.theme.colors.text}
`;
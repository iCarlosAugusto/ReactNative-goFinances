import styled from "styled-components/native";
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.background};
`;
export const Header = styled.View` 
    height: ${RFValue(113)}px;
    background-color: ${(props) => props.theme.colors.primary};
    justify-content: center;
`;

export const Title = styled.Text`
    color: ${(props) => props.theme.colors.shape};
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    text-align: center;
`;

export const Form = styled.View`
    flex: 1;
    width: 100%;
    padding: 24px;
    justify-content: space-between;
`

export const Fields = styled.View`

`;

export const Transactions = styled.View`
    flex-direction: row;
    width: 98%;
    justify-content: space-between;
`;
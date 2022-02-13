import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface ContainerProps {
    color: string
}

export const Container = styled.View<ContainerProps>`
    width: 100%;
    height: 70px;
    background-color: ${props => props.theme.colors.shape};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-left-color: ${props => props.color};
    border-left-width: 6px;
    margin-bottom: 8px;
    border-radius: 5px;
`;

export const Title = styled.Text`
    font-family: ${props => props.theme.fonts.regular}
    font-size: ${RFValue(15)}px;
`;

export const Amount = styled.Text`
    font-family: ${props => props.theme.fonts.bold}
    font-size: ${RFValue(15)}px;
`
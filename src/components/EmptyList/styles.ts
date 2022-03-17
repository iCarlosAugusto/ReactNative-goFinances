import styled from "styled-components/native";
import emptyList from '../../assets/emptyList.png';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
`;

export const Menssage = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.attention};
    margin-top: 10px;
    align-self: center;
`;

export const Image = styled.Image.attrs({
    source: emptyList,
    alt: "Empty List"
})`
    width: ${RFValue(170)}px;
    height: ${RFValue(170)}px;
    align-self: center;
`;
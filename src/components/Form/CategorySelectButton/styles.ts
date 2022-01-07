import styled from "styled-components/native";
import {Feather} from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    background-color: ${(props) => props.theme.colors.shape};
    margin-top: ${RFValue(15)}px;
    justify-content: space-between;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    padding: ${RFValue(16)}px;
`;

export const Category = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${(props) => props.theme.fonts.regular};
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${(props) => props.theme.colors.text};
`;


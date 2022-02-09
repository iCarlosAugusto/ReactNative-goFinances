import styled from "styled-components/native";
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
    width: 100%;
    background-color: ${(props) => props.theme.colors.shape};
    padding: 18px;
    border-radius: 5px;
    margin-top: ${RFValue(8)}px;
`;

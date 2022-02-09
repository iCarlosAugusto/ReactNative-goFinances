import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
    background-color: ${(props) => props.theme.colors.secondary};
    width: 100%;
    border-radius: 5px;
    align-items: center;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: ${(RFValue(14))}px;
  color: ${(props) => props.theme.colors.shape};
  padding: 18px;
`;
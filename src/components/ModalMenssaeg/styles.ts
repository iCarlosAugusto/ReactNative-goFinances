import styled from "styled-components/native";
import { Animated } from "react-native";

export const Text = styled.Text`
    color: ${(props) => props.theme.colors.shape};
    font-family: ${(props) => props.theme.fonts.medium};

`;
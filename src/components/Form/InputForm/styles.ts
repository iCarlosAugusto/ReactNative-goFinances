import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;  
`;

export const Error = styled.Text`
    color: ${(props) => props.theme.colors.attention};
    font-size: 15px;
`;
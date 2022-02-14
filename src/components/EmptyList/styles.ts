import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    
`;

export const Menssage = styled.Text`
    font-size: 15px;
    color: ${({theme}) => theme.colors.attention};
    
`;
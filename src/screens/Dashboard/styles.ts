import styled from "styled-components/native";
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { DataListProps } from ".";
import { FlatList } from 'react-native';

export const Conteiner = styled.View`
    flex: 1;
    background-color: ${({ theme })=> theme.colors.background};
`;

export const Header = styled.View`
    background-color: red;
    width: 100%;
    height: ${RFPercentage(42)}px
    background-color: ${(props) => props.theme.colors.primary};
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 24px;
    margin-top: ${RFValue(-120)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
`;

export const UserInfo = styled.View`
    align-items: center;
    flex-direction: row;

`;

export const Photo = styled.Image`
    width: ${RFValue(55)}px;
    height: ${RFValue(55)}px;
    border-radius: 10px;
`;
 
export const User = styled.View`
 margin-left: 17px;
`;
 

export const UserGreeting = styled.Text`
    color: ${(props) => props.theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${(props) => props.theme.fonts.regular};
`;

export const UserName = styled.Text`
    color: ${(props) => props.theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${(props) => props.theme.fonts.bold};
`;

export const Icon = styled(Feather)`
    color: white;
    font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true, 
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {paddingHorizontal: 24}
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
    flex: 1%;
    padding: 0 24px;
    margin-top: ${RFPercentage(12)}px;

`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${(props) => props.theme.fonts.regular};
`;

export const TransactionList = styled.FlatList`

`;
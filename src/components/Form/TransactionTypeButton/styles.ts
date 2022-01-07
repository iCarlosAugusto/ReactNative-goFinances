import styled, {css} from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

import { TouchableOpacity} from 'react-native';

interface TypeProps{
    type: 'up' | 'down';
}

interface SelectedProps extends TypeProps {
    isActive: boolean;
}

export const Container = styled(TouchableOpacity)<SelectedProps>`
    margin-top: ${RFValue(16)}px;
    width: 48%;
    
    border-width: ${({isActive}) => isActive ? 0 : 1.5 }px;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.text};
    border-radius: 5px;
    padding: 18px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    

    ${({isActive, type}) => isActive && type === 'down' && css`
        background-color: ${(props) => props.theme.colors.attention_light};
    `}

    ${({isActive, type}) => isActive && type === 'up' && css`
        background-color: ${(props) => props.theme.colors.sucess_light};
    `}
`;

export const Title = styled.Text`
    color: ${(props) => props.theme.colors.text};
    font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)<TypeProps>`

    ${(props) => props.type ==='down' && css`
        color: ${(props) => props.theme.colors.attention}
    `}

    ${(props) => props.type ==='up' && css`
    color: ${(props) => props.theme.colors.sucess}
    `}

    margin-right: 12px;
    font-size: ${RFValue(24)}px;
`;
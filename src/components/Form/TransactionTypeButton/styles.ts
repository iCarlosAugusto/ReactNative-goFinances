import styled, {css} from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";
import { TouchableOpacity} from 'react-native';

interface TypeProps{
    type: 'up' | 'down';
}

interface SelectedProps extends TypeProps {
    isActive: boolean;
}

export const Container = styled.View<SelectedProps>`
    margin-top: ${RFValue(16)}px;
    width: 48%;
    
    border-width: ${({isActive}) => isActive ? 0 : 1.5 }px;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.text};
    border-radius: 5px;


    

    ${({isActive, type}) => isActive && type === 'down' && css`
        background-color: ${(props) => props.theme.colors.attention_light};
    `}

    ${({isActive, type}) => isActive && type === 'up' && css`
        background-color: ${(props) => props.theme.colors.success_light};
    `}
`;

export const Title = styled.Text`
    color: ${(props) => props.theme.colors.text};
    font-size: ${RFValue(14)}px;
`;

export const Button = styled(RectButton)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px;
`;

export const Icon = styled(Feather)<TypeProps>`

    ${(props) => props.type ==='down' && css`
        color: ${(props) => props.theme.colors.attention}
    `}

    ${(props) => props.type ==='up' && css`
    color: ${(props) => props.theme.colors.success}
    `}

    margin-right: 12px;
    font-size: ${RFValue(24)}px;
`;
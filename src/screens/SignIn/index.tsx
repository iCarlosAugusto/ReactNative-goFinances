import React, { useContext } from 'react';
import { Alert } from 'react-native';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';

import { RFValue } from 'react-native-responsive-fontsize';

import { SignInSocialButton } from '../../components/SingInSocialButton';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper
 } from './styles';

export function SignIn() {
    const { signInWithGoogle } = useAuth();
   

    async function handleSignInWithGoogle(){
      try {
        await signInWithGoogle();
      } catch (error) {
        Alert.alert('Não foi possível conectar a conta google');
        console.log(error);
      }
    }

    const handleSignInWithApple = () => {
        console.log('APPLE');
    }

  return (
    <Container>
      <Header>
        <TitleWrapper>

          
          <Title>
            Controle suas {'\n'}
            finanças de forma {'\n'}
            muito simples
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Faça seu login com {'\n'}
          uma das contas abaixo
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />

          <SignInSocialButton
            title="Entrar com Apple"
            svg={AppleSvg}
            onPress={handleSignInWithApple}
          />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
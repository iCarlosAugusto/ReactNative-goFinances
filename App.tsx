import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import {
  useFonts, 
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
  } from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme';

import { NavigationContainer } from '@react-navigation/native';
import { AppRouter } from './src/routes/app.routes';

export default function App() {

const [fontsLoader] = useFonts({
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
});

if(!fontsLoader){
  return <AppLoading/>
}

  return(
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRouter/>
      </NavigationContainer>
    </ThemeProvider>
  )
}
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import * as AuthSession from 'expo-auth-session';
import * as AppleAuthentication from 'expo-apple-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {CLIENTE_ID} = process.env;
const {REDIRECT_URI} = process.env;

interface AuthProviderProps {
  children: ReactNode;
};

interface User{
    id: string,
    name: string,
    email: string,
    photo?: string
};

interface AuthContextProps {
  user: User,
  signInWithGoogle: () => Promise<void>,
  signInWithApple: () => Promise<void>,
  signOut: () => Promise<void>
};

interface AuthorizationResponse {
    params: {
      access_token: string;
    };
    type: string;
};

const AuthContext = createContext({} as AuthContextProps);


function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User);

    const userStorageKey = '@gofinances:user';

    useEffect(()=> {
      async function loadUserStorageDate(){
        const userStoraged = await AsyncStorage.getItem('@gofinances:user');

        if(userStoraged){
          const userLogged  = JSON.parse(userStoraged) as User;
          setUser(userLogged); 
        }  
      }

      loadUserStorageDate()
    }, []);

    async function signInWithGoogle(){
        try {

            const RESPONSE_TYPE = 'token';
            const SCOPE = encodeURI('profile email');

            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENTE_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
            const {type, params} =  await AuthSession.startAsync({authUrl}) as AuthorizationResponse;
            
            if(type === 'success'){
                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
                const userInfo = await response.json();

                const userLogged = {
                    id: userInfo.id,
                    email: userInfo.email,
                    name: userInfo.given_name,
                    photo: userInfo.picture
                };
                setUser(userLogged);
                AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));
            }
        } catch (error) {
            throw new Error(error);
        }
    };

    async function signInWithApple() {
        try {
          const credential = await AppleAuthentication.signInAsync({
            requestedScopes: [
              AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
              AppleAuthentication.AppleAuthenticationScope.EMAIL,
            ]
          });
    
          if (credential) {
            const userLogged = {
              id: String(credential.user),
              email: credential.email!,
              name: credential.fullName!.givenName!,
              photo: undefined
            };
    
            setUser(userLogged);
            await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged))
          }
        } catch (error) {
          throw new Error(error);
        }
      }

    async function signOut(){
      await AsyncStorage.removeItem(userStorageKey);
      setUser({} as User);
    }

    

  return (
        <AuthContext.Provider value={{user, signInWithGoogle, signInWithApple, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };

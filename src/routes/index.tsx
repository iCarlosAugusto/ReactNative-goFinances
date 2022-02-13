import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from "../hooks/auth";

import { AppRouter } from "./app.routes";
import { AuthRouter } from "./auth.routes";

export function Routes() {

    const { user } = useAuth();
    
    return(
        <NavigationContainer >
            {user.id ? <AppRouter/> : <AuthRouter/> }
        </NavigationContainer>
    )
}

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRouter() {
  return (
    <Navigator>
      <Screen
        options={{
          header: () => false,
        }}
        name="SignIn"
        component={SignIn}
      />
    </Navigator>
  );
}

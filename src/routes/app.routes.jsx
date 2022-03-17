import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Dashboard } from "../screens/Dashboard";
import { Register } from "../screens/Register";
import { Resume } from "../screens/Resume"; 
import { Modal } from "../components/ModalMenssaeg";
import { useTheme } from "styled-components";
import { Platform } from "react-native";

export function AppRouter() {
  const { Navigator, Screen } = createBottomTabNavigator();
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          height: 88,
          padding: Platform.OS === "ios" ? 20 : 0,
        },
      }}
    >
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="format-list-bulleted"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Screen
        name="Registro"
        component={Register}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="attach-money"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Screen
        name="Resumo"
        component={Resume}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="pie-chart"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Navigator>
  );
}

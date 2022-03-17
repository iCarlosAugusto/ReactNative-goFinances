import React, { useEffect, useRef } from "react";
import { Animated, SafeAreaView } from "react-native";
import {
  Text
} from './styles';

interface ModalMenssageProps {
  isModalOpen: boolean,
  menssageType: "attention" | "success",
  menssage?: string
}

export function ModalMenssage({ isModalOpen = false, menssageType ,menssage }: ModalMenssageProps) {

  const positionTop = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    console.log("IsModalOpen: "+isModalOpen);
    if(isModalOpen){
    
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start(),

        Animated.timing(positionTop, {
          toValue: 60,
          duration: 1500,
          useNativeDriver: true,
        }).start();

    }else{
  
        Animated.timing(opacity, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start(),

        Animated.timing(positionTop, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }).start();
    }
  }, [isModalOpen]);

  return (
    <SafeAreaView>
      <Animated.View
        style={{
          position: "absolute",
          alignSelf: "center",
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          zIndex: 9999,
          width: 300,
          height: 100,
          opacity: opacity,
          backgroundColor: menssageType === "success" ? '#0DD998' : menssageType === 'attention' ? '#F53F2F' : '#0DD998',
          transform: [
            {
              translateY: positionTop,
            },
          ],
        }}
      >
        <Text>{menssage}</Text>
        
      </Animated.View>
    </SafeAreaView>
  );
};
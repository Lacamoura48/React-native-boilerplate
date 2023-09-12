import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

const Welcome = () => {
  return (
    <ImageBackground source={require('../../assets/images/welcome-bg.png')} resizeMode="stretch" className="flex-1">
      <Text className="text-brownie text-4xl">Welcome</Text>
    </ImageBackground>
  );
};

export default Welcome;



import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import {t} from "i18next"

const Welcome = () => {
  return (
    <ImageBackground source={require('../../assets/images/welcome-bg.png')} resizeMode="stretch" className="flex-1">
      <Text className="text-brownie text-4xl">{t('welcome')}</Text>
    </ImageBackground>
  );
};

export default Welcome;



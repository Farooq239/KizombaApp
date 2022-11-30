import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import AppStyle from '../styles/AppStyle';
import { ColorSet, screenHeight } from '../styles';

const Splash: React.FC<{ navigation: any }> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Register');
    }, 3000);
  }, []);
  return (
    <View style={[AppStyle.flex1, styles.container]}>
      <Text style={styles.mainStyle}>
        <Text style={styles.kizombaColorStyle}>Kizomba</Text>
        <Text style={styles.whereColorStyle}>Where</Text>
      </Text>
    </View>
  );
};
export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorSet.black,
    height: screenHeight.height100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainStyle: {
    fontSize: 36,
  },
  kizombaColorStyle: {
    color: '#ffffff',
  },
  whereColorStyle: {
    color: '#E02BB6',
  },
});

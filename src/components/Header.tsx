import React from 'react';

import {
  StyleSheet,
  Text,
  ViewStyle,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Avatar } from 'react-native-paper';
import { H5 } from '../components';
import { AppStyle, ColorSet, FamilySet, screenHeight } from '../styles';

interface ButtonProps {
  homeHeader?: boolean | undefined;
  back?: boolean | undefined;
  title?: any;
  containerStyle?: ViewStyle;
  style?: ViewStyle;
  textStyle?: ViewStyle | any;
  textContainer?: ViewStyle | any;
  imageSourceProp?: any;
  left?: boolean | undefined
  onPress?: (() => void) | undefined;
  backtext1?: string
  backtext2?: string
  onBackPress?: (() => void) | undefined;
  sabtitleHeader?: boolean | undefined;
  sabtitleText1?: string
  sabtitleText2?: string
}

const Header: React.FC<ButtonProps> = ({
  style,
  textContainer,
  homeHeader,
  left,
  back,
  backtext1,
  backtext2,
  sabtitleHeader,
  sabtitleText1,
  sabtitleText2,
  onBackPress
}: ButtonProps) => {
  return (
    <View style={[styles.mainContainer, style]}>
      {homeHeader && (
        <>
          <View style={[styles.leftContainer]}>
            <View style={styles.textContainer}>
              <Text style={styles.mainStyle}>
                <Text style={styles.kizombaColorStyle}>Kizomba</Text>
                <Text style={styles.whereColorStyle}>Where</Text>
              </Text>
            </View>
            <View style={styles.profileIcon}>
              <Text style={styles.mcText}>MC</Text>
            </View>
          </View>
        </>
      )}
      {left && (
        <>
          <View style={[styles.leftContainer]}>
            <View style={styles.textContainer}>
              <Image style={{ height: 24, width: 24 }} source={require('../assets/images/icons/cross.png')} />
            </View>
          </View>
        </>
      )}
      {back && (
        <>
          <View style={[styles.backContainer]}>
            <TouchableOpacity onPress={onBackPress}>
              <Image style={{ height: 24, width: 24 }} source={require('../assets/images/icons/arrow-back.png')} />
            </TouchableOpacity>
            <View>
              <Text style={{ color: ColorSet.softWhite, fontSize: 18, marginLeft: 20 }}>
                <Text>{backtext1}</Text>
                <Text style={{ color: '#E02BB6' }}>{backtext2}</Text>
              </Text>
            </View>
          </View>
        </>
      )}
      {sabtitleHeader && (
        <>
          <View style={[styles.sabtitleContainer]}>
            <TouchableOpacity onPress={onBackPress}>
              <Image style={{ height: 24, width: 24, marginLeft: 5 }} source={require('../assets/images/icons/arrow-back.png')} />
            </TouchableOpacity>
            <View>
              <Text style={{ color: ColorSet.softWhite, fontSize: 18, marginLeft: 20 }}>{sabtitleText1}</Text>
              <Text style={{ color: '#FFFFFF99', fontSize: 12, marginLeft: 20 }}>{sabtitleText2}</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    height: screenHeight.height7,
  },
  container: {
    flexDirection: 'row',
    height: '10%',
    backgroundColor: ColorSet.backgroundColor,
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    height: screenHeight.height7,
    backgroundColor: ColorSet.backgroundColor,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  backContainer: {
    flexDirection: 'row',
    height: screenHeight.height7,
    backgroundColor: ColorSet.backgroundColor,
    alignItems: 'center',
  },
  sabtitleContainer: {
    flexDirection: 'row',
    height: screenHeight.height7,
    backgroundColor: '#00000029',
    alignItems: 'center',
  },
  mcText: {
    fontSize: 10,
    color: ColorSet.black,
  },
  profileIcon: {
    backgroundColor: '#A6AABC99',
    borderRadius: 100,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainStyle: {
    fontSize: 22,
  },
  kizombaColorStyle: {
    color: '#ffffff',
  },
  whereColorStyle: {
    color: '#E02BB6',
  },
  textContainer: {
    // backgroundColor: 'red',
    // alignItems: 'flex-start',
  },
});

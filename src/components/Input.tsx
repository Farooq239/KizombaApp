import React, {useState} from 'react';

import {
  StyleSheet,
  View,
  TextStyle,
  ColorValue,
  KeyboardTypeOptions,
} from 'react-native';

import {HelperText, TextInput} from 'react-native-paper';
import {Icons} from '../constants';
import {ColorSet} from '../styles/Color';
import {screenWidth} from '../styles/ScreenSize';

interface Props {
  label?: string | undefined;
  value?: string | undefined;
  placeholder?: string | undefined;
  placeholderTextColor?: ColorValue | '#737B8C';
  outlineColor?: string | 'gray';
  activeOutlineColor?: string | 'gray';
  onChangeText?: ((value: string) => void) | undefined;
  secureText?: boolean | undefined;
  errorText?: string | undefined;
  leftIcon?: boolean | undefined;
  search?: boolean | undefined;
  style?: TextStyle;
  keyboardType?: KeyboardTypeOptions | undefined;
}

const Input: React.FC<Props> = ({
  label,
  value,
  placeholder,
  onChangeText,
  secureText,
  outlineColor,
  activeOutlineColor,
  placeholderTextColor,
  errorText,
  leftIcon,
  style,
  search,
  keyboardType,
}: Props) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <View>
      <TextInput
        style={[styles.main, style]}
        placeholderTextColor={placeholderTextColor}
        outlineColor={outlineColor}
        activeOutlineColor={activeOutlineColor}
        mode="outlined"
        left={
          leftIcon ? (
            <TextInput.Icon
              icon={require('../assets/images/SearchBar.png')}
              color="white"
              onPress={() => setShow(!show)}
            />
          ) : null
        }
        theme={{
          colors: {
            text: ColorSet.softWhite,
            placeholder: '#737B8C',
          },
          fonts: {},
        }}
        right={
          secureText ? (
            <TextInput.Icon
              icon={!show ? Icons.ic_show : Icons.ic_hide}
              color="#ABB0BA"
              onPress={() => {
                setShow(!show);
              }}
            />
          ) : search ? (
            <TextInput.Icon
              icon={require('../assets/images/SearchBar.png')}
              size={18}
              color="#ABB0BA"
              //   onPress={() => searchHandler()}
              style={{marginTop: 10}}
            />
          ) : (
            <></>
          )
        }
        label={label}
        secureTextEntry={show ? true : false}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
      />
      {errorText != 'true' && (
        <HelperText type="error" style={styles.errorText}>
          {errorText}
        </HelperText>
      )}
    </View>
  );
};
export default Input;
const styles = StyleSheet.create({
  main: {
    width: screenWidth.width90,
    backgroundColor: '#B1B4D514',
    marginTop: 5,
    paddingLeft: 5,
    borderColor: '#B1B4D514',
  },
  errorText: {
    width: screenWidth.width90,
  },
});

import React from 'react'
import { StyleSheet, Image, Text, ViewStyle, View, TouchableOpacity, ImageStyle } from 'react-native'
import AppStyle from '../styles/AppStyle'
import { ColorSet } from '../styles/Color'
import { FamilySet } from '../styles/FontFamily'

interface ButtonProps {
    text?: string,
    containerStyle?: ViewStyle,
    style?: ViewStyle,
    textStyle?: ViewStyle | any
    imageSourceProp?: any
    onPress?: (() => void) | undefined
    disable?: boolean
    logoStyle?: ImageStyle | any
    left?: boolean | undefined
    right?: boolean | undefined
}

const Button: React.FC<ButtonProps> = ({ text, disable, containerStyle, onPress, style, textStyle, imageSourceProp, logoStyle, left, right }: ButtonProps) => {
    return (
        <View style={[containerStyle]}>
            <TouchableOpacity disabled={disable} activeOpacity={0.5} onPress={onPress} style={[styles.button, style]}>
                {/* {imageSourceProp && left && <Image style={[logoStyle, styles.leftBtnLogo]} source={imageSourceProp} />} */}
                <Text style={[styles.buttonText, textStyle]}>{text}</Text>
                {/* {imageSourceProp && right && <Image style={[logoStyle, styles.btnLogo]} source={imageSourceProp} />} */}
            </TouchableOpacity>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        height: 50,
        ...AppStyle.txtCenter,
        borderRadius: 50,
        ...AppStyle.row,
        ...AppStyle.aiCenter,
        width: '90%',
        ...AppStyle.mt15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        backgroundColor: '#E82DB6',
        alignSelf: 'center'
    },
    buttonText: {
        fontFamily: FamilySet.variableFont,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 18
    },
    btnLogo: {
        width: 18,
        height: 18,
        marginRight: 50,
        marginLeft: 10,
        resizeMode: 'contain'
    },
    leftBtnLogo: {
        width: 20,
        height: 20,
        marginRight: 40,
        resizeMode: 'contain'
    }
})
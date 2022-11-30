import React from 'react'
import { View, Text, StyleSheet, ViewStyle } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { ColorSet } from '../../styles/Color'
import { FamilySet } from '../../styles/FontFamily'

interface props {
    text?: string | undefined,
    containerStyle?: ViewStyle,
    style?: ViewStyle
}

const H2: React.FC<props> = ({ text, containerStyle, style }: props) => {
    return (
        <View style={containerStyle}>
            <Text style={[styles.heading, style]}>{text}</Text>
        </View>
    )
}
export default H2

const styles = StyleSheet.create({
    heading: {
        color: ColorSet.softWhite,
        fontSize: RFValue(14),
        fontWeight: '700',
        fontFamily: FamilySet.variableFont,
        lineHeight: 30.8,
        marginTop: 15
    },

})


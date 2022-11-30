import React from 'react'
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { ColorSet } from '../../styles/Color'
import { FamilySet } from '../../styles/FontFamily'

interface H3props {
    style?: TextStyle | undefined
    numberOfLines?: number | undefined
    containerStyle?: ViewStyle | undefined
}

const H5: React.FC<H3props> = props => {
    const { style, numberOfLines, containerStyle } = props
    return (
        <View style={containerStyle}>
            <Text numberOfLines={numberOfLines} style={{ ...styles.heading, ...style }}>{props.children}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    heading: {
        color: ColorSet.softWhite,
        fontSize: RFValue(14),
        fontWeight: '500',
        fontFamily: FamilySet.variableFont,
        lineHeight: 18.2,
    },
})
export default H5

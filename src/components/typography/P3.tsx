import React from 'react'
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { ColorSet } from '../../styles/Color'
import { FamilySet } from '../../styles/FontFamily'

interface P4props {
    style?: TextStyle | undefined
    numberOfLines?: number | undefined
    containerStyle?: ViewStyle | undefined
}

const P3: React.FC<P4props> = props => {
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
        fontSize: RFValue(16),
        fontWeight: '400',
        fontFamily: FamilySet.inter,
        lineHeight: 18,
    },
})
export default P3
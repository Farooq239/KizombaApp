import React from 'react'
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { ColorSet } from '../../styles/Color'
import { FamilySet } from '../../styles/FontFamily'

interface P5props {
    style?: TextStyle | undefined
    numberOfLines?: number | undefined
    containerStyle?: ViewStyle | undefined
}

const P5: React.FC<P5props> = props => {
    const { style, numberOfLines, containerStyle } = props
    return (
        <View style={containerStyle}>
            <Text numberOfLines={numberOfLines} style={{ ...styles.heading, ...style }}>{props.children}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    heading: {
        color: ColorSet.gray,
        fontSize: 10,
        fontWeight: '400',
        fontFamily: FamilySet.inter,
        lineHeight: 15,
    },
})
export default P5
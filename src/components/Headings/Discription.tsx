import React from 'react'
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import { ColorSet } from '../../styles/Color'
import { FamilySet } from '../../styles/FontFamily'

interface ParagraphProps {
    style?: TextStyle | undefined
    numberOfLines?: number | undefined
    containerStyle?: ViewStyle | undefined
}

const Discription: React.FC<ParagraphProps> = props => {
    const { style, numberOfLines, containerStyle } = props
    return (
        <View style={containerStyle}>
            <Text numberOfLines={numberOfLines} style={{ ...styles.paragraph, ...style }}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
    },
    paragraph: {
        color: ColorSet.softWhite,
        fontSize: 12,
        lineHeight: 20,
        fontFamily: FamilySet.inter,
    },
})
export default Discription

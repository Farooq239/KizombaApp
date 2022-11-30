import React from 'react'

import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import { ColorSet } from '../styles/Color'
import { FamilySet } from '../styles/FontFamily'

interface Props {
    text?: string | undefined,
    onPress?: (() => void) | undefined
}

const TouchableText: React.FC<Props> = ({ text, onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.textStyle}>{text}</Text>
        </TouchableOpacity>
    )
}

export default TouchableText
const styles = StyleSheet.create({
    textStyle: {
        color: ColorSet.pink,
        fontFamily: FamilySet.variableFont,
        fontWeight: '500',
        lineHeight: 18.2,
        fontSize: 14,
        fontStyle: 'normal'
    }
})
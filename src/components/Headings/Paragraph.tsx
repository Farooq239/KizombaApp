import React from 'react'
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import { ColorSet } from '../../styles/Color'
import { FamilySet } from '../../styles/FontFamily'

interface ParagraphProps {
  style?: TextStyle | undefined
  containerStyle?: ViewStyle | undefined
  fontColor?: TextStyle | undefined
  numberOfLines?: number | undefined
}

const Paragraph: React.FC<ParagraphProps> = props => {
  const { style, numberOfLines, fontColor, containerStyle } = props
  return (
    <View style={containerStyle}>
      <Text numberOfLines={numberOfLines} style={[{ ...styles.paragraph, ...style }, fontColor]}>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  paragraph: {
    color: ColorSet.softWhite,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: FamilySet.inter,
  },
})

export default Paragraph

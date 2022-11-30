import React from 'react'
import { StyleSheet, Image, Text, ViewStyle, View, TouchableOpacity, ImageStyle, FlatList } from 'react-native'
import { djsData } from '../../assets/dummy/djsData'
import { AppStyle, ColorSet, FamilySet, screenHeight } from '../../styles'

interface ButtonProps {
    text?: string,
    containerStyle?: ViewStyle,
    style?: ViewStyle,
    textStyle?: ViewStyle | any
    onPress?: (() => void) | undefined
    disable?: boolean
}

const DjsFlatlist: React.FC<ButtonProps> = ({ text, disable, containerStyle, onPress, style, textStyle }: ButtonProps) => {

    return (
        <View style={[containerStyle, styles.container]}>
            <FlatList
                data={djsData}
                renderItem={({ item }) => {
                    return (
                        <View style={{ backgroundColor: 'blue', flex: 1 }}>
                            <Text style={{ color: ColorSet.softWhite }}>{item.name}</Text>
                        </View>
                    )
                }}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default DjsFlatlist

const styles = StyleSheet.create({
    container: {
        height: screenHeight.height20,
        backgroundColor: 'red'
    }
})
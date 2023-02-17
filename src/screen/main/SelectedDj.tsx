import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header';
import AppStyle from '../../styles/AppStyle';
import { ColorSet, FamilySet, screenHeight, screenWidth } from '../../styles';
import Input from '../../components/Input';
import { selectedDj, userData } from '../../assets/dummy/videoData';

const SelectedDj: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
    const { item } = route.params;
    return (
        <SafeAreaView style={[AppStyle.flex1, { backgroundColor: ColorSet.backgroundColor }]}>
            <Header left />
            <TouchableOpacity style={[styles.itemView, , { marginLeft: 40, borderWidth: 0 }]} onPress={() => navigation.navigate('PartyHome')}>
                <View style={[styles.avatarView]}>
                    <Image source={item.avatarUri} style={styles.avatarImage} />
                </View>
                <View style={styles.captionView}>
                    <View style={AppStyle.row}>
                        <View style={styles.captionTitleView}>
                            <Text style={styles.nameText}>{item.name}</Text>
                            <Text style={styles.captionText}>{item.caption}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <ScrollView style={styles.mapView}>
                {selectedDj.map((item: any, index: any) => {
                    return (
                        <View style={{ height: screenHeight.height42 }}>
                            <Text style={[styles.nameText, { marginLeft: 10, marginTop: 10 }]}>{item.name}</Text>
                            <View style={styles.cardView}>
                                <Image source={item.avatarUri} style={styles.cardImage} />
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    );
};
export default SelectedDj;

const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorSet.black,
        height: screenHeight.height100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchContainer: {
        height: screenHeight.height10,
        backgroundColor: ColorSet.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchBarView: {
        height: screenHeight.height7,
        width: screenWidth.width90,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: ColorSet.softWhite,
        justifyContent: 'center',
    },
    mapView: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: ColorSet.backgroundColor,
        paddingBottom: 10
    },
    itemView: {
        height: screenHeight.height10,
        flexDirection: 'row',
        borderWidth: 1
    },
    cardView: {
        height: screenHeight.height35,
        width: screenWidth.width90,
        flexDirection: 'row',
        backgroundColor: 'red',
        alignSelf: 'center',
        marginTop: 15
    },
    cardImage: {
        height: screenHeight.height35,
        width: screenWidth.width90,
    },
    avatarView: {
        width: screenWidth.width20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarImage: {
        height: 44,
        width: 44,
        borderRadius: 100
    },
    captionView: {
        width: screenWidth.width70,
        justifyContent: 'center'
    },
    captionTitleView: {
        width: screenWidth.width100
    },
    nameText: {
        color: ColorSet.softWhite
    },
    captionText: {
        color: '#E82DB6'
    },
    nextIcon: {
        height: 24,
        width: 24,
        tintColor: ColorSet.softWhite
    }
});

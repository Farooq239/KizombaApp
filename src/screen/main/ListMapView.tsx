import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import Header from '../../components/Header';
import AppStyle from '../../styles/AppStyle';
import { ColorSet, screenHeight, screenWidth } from '../../styles';
import { userData } from '../../assets/dummy/videoData';

const ListMapView: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
    return (
        <SafeAreaView style={[AppStyle.flex1, { backgroundColor: ColorSet.backgroundColor, paddingHorizontal: 10 }]}>
            <Header
                sabtitleHeader
                sabtitleText1='Lyon'
                sabtitleText2='Samedi 19 novembre 2022'
                onBackPress={() => navigation.goBack()}
            />
            <View style={styles.buttonView}>
                <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Image style={{ height: 24, width: 24, marginLeft: 6 }} source={require('../../assets/images/icons/icon-list.png')} />
                    <Text style={{ color: ColorSet.softWhite }}>Carte</Text>
                </View>
                <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', flexDirection: 'row' }}>
                    <Image style={{ height: 24, width: 24, marginLeft: 6 }} source={require('../../assets/images/icons/icon-map.png')} />
                    <Text style={{ color: ColorSet.softWhite }}>Liste</Text>
                </View>
            </View>
            <ScrollView style={styles.mapView}>
                {userData.map((item: any, index: any) => {
                    return (
                        <TouchableOpacity style={styles.itemView} onPress={() => navigation.navigate('Login')}>
                            <View style={styles.avatarView}>
                                <Image source={{ uri: item.avatarUri }} style={styles.avatarImage} />
                            </View>
                            <View style={styles.captionView}>
                                <View style={AppStyle.row}>
                                    <View style={styles.captionTitleView}>
                                        <Text style={styles.nameText}>{item.name}</Text>
                                        <Text style={styles.captionText}>{item.caption}</Text>
                                        <Text style={styles.location}>{item.locatiion}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    );
};
export default ListMapView;

const styles = StyleSheet.create({
    buttonView: {
        height: screenHeight.height6,
        backgroundColor: '#E82DB6',
        borderRadius: 50,
        flexDirection: 'row',
        marginTop: 10
    },

    mapView: {
        paddingHorizontal: 10,
        backgroundColor: ColorSet.backgroundColor,
        paddingBottom: 10
    },
    itemView: {
        height: screenHeight.height17,
        flexDirection: 'row',
        borderWidth: 1
    },
    avatarView: {
        width: screenWidth.width32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarImage: {
        height: 120,
        width: 100,
    },
    captionView: {
        width: screenWidth.width70,
        justifyContent: 'center'
    },
    captionTitleView: {
        width: screenWidth.width65
    },
    nameText: {
        color: ColorSet.softWhite
    },
    captionText: {
        color: '#E82DB6'
    },
    location: {
        color: '#ffffff'
    },
    nextIcon: {
        height: 24,
        width: 24,
        tintColor: ColorSet.softWhite
    }

});

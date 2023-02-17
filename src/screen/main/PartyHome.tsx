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
    FlatList,
} from 'react-native';
import Header from '../../components/Header';
import AppStyle from '../../styles/AppStyle';
import { ColorSet, FamilySet, screenHeight, screenWidth } from '../../styles';
import Input from '../../components/Input';
import { partyData, profData, userData } from '../../assets/dummy/videoData';

const PartyHome: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
    return (
        <SafeAreaView style={[AppStyle.flex1, { backgroundColor: ColorSet.backgroundColor }]}>
            <Header homeHeader />
            <View style={styles.searchContainer}>
                <Input
                    placeholder="Trouvez une soirée autour de vous"
                    leftIcon />
            </View>
            <ScrollView style={styles.mapView}>
                {partyData.map((item: any, index: any) => {
                    return (
                        <View style={{ height: screenHeight.height42 }}>
                            <View style={styles.cardView}>
                                <Image source={item.avatarUri} style={styles.cardImage} />
                            </View>
                            <Text style={[styles.nameText, { marginLeft: 10, marginTop: 10 }]}>{item.name}</Text>
                        </View>
                    )
                })}
                <View style={{ paddingTop: 30 }}>
                    <FlatList
                        horizontal
                        data={userData}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <View style={styles.circleImageView}>
                                        <Image source={item.avatarUri} style={styles.circleImage} />
                                    </View>
                                    <Text style={[{ color: 'white' }]}>{item.name}</Text>
                                </View>
                            )
                        }}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={{ paddingTop: 30 }}>
                    <FlatList
                        horizontal
                        data={profData}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => navigation.navigate('SelectCountry')}>
                                    <View style={styles.circleImageView}>
                                        <Image source={item.avatarUri} style={styles.circleImage} />
                                    </View>
                                    <Text style={[{ color: 'white' }]}>{item.name}</Text>
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={item => item.id}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default PartyHome;

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
    circleImageView: {
        height: screenHeight.height15,
        width: screenWidth.width35,
    },
    cardImage: {
        height: screenHeight.height35,
        width: screenWidth.width90,
    },
    circleImage: {
        height: 100,
        width: 100,
        borderRadius: 100
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

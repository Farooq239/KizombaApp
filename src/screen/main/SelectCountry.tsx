import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header';
import AppStyle from '../../styles/AppStyle';
import { ColorSet, FamilySet, screenHeight, screenWidth } from '../../styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import CalendarPicker from 'react-native-calendar-picker';

const SelectCountry: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [showPicker, setShowPicker] = useState(false);

    const onDateChange = (date, type) => {
        if (type === 'END_DATE') {
            setShowPicker(false)
            setSelectedEndDate(date);
        } else {
            setSelectedEndDate(null);
            setShowPicker(false)
            setSelectedStartDate(date);
        }
    };
    return (
        <SafeAreaView style={[AppStyle.flex1, { backgroundColor: ColorSet.backgroundColor, paddingHorizontal: 10 }]}>
            {showPicker == false ? (
                <>
                    <Header back backtext1='Trouvez une' backtext2='soirée' onBackPress={() => navigation.goBack()} />
                    <View style={styles.searchContainer}>
                        <Input
                            placeholder="Recherchez ville / département"
                            leftIcon />
                    </View>
                    <View style={styles.searchContainer}>
                        <View style={styles.gpsView}>
                            <Image style={{ height: 24, width: 24, marginLeft: 6 }} source={require('../../assets/images/icons/icon-gps.png')} />
                            <Text style={{ color: '#E02BB6', marginLeft: 6, fontSize: 15 }}>Proche de vous</Text>
                        </View>
                    </View>
                    <View style={styles.searchContainer}>
                        <View style={styles.gpsView}>
                            <TouchableOpacity onPress={() => setShowPicker(true)}>
                                <Image style={{ height: 18, width: 18, marginLeft: 6, tintColor: '#FFFFFF' }} source={require('../../assets/images/icons/calendar.png')} />
                            </TouchableOpacity>
                            <Text style={{ color: '#ffffff', marginLeft: 6, fontSize: 15 }}>Ce soir</Text>
                            <Image style={{ height: 18, width: 18, marginLeft: 200, tintColor: '#FFFFFF' }} source={require('../../assets/images/icons/icon-edit-white.png')} />
                        </View>
                    </View>
                    <Text style={{ color: '#A6AABC99' }}>Les plus recherchés</Text>
                    <View style={styles.suggestion}>
                        <Text style={styles.suggestionText}>Paris</Text>
                        <Text style={styles.suggestionText}>Île de france</Text>
                        <Text style={styles.suggestionText}>Val de marne</Text>
                    </View>
                    <Button text='Rechercher' onPress={() => navigation.navigate('ListMapView')} />
                </>
            ) : (
                <CalendarPicker
                    vertical={true}
                    startFromMonday={true}
                    allowRangeSelection={false}
                    todayBackgroundColor='tranparent'
                    selectedDayColor='#E82DB6'
                    selectedDayTextColor='#E82DB6'
                    onDateChange={onDateChange}
                    previousTitle='Annuler'
                    nextTitle='Next'
                    previousTitleStyle={{ color: ColorSet.softWhite }}
                    nextTitleStyle={{ color: ColorSet.softWhite }}
                    textStyle={{ color: ColorSet.softWhite }}
                    customDatesStyles={{ color: ColorSet.softWhite }}
                />
            )

            }

        </SafeAreaView>
    );
};
export default SelectCountry;

const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorSet.black,
        height: screenHeight.height100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerCalender: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 100,
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
    button: {
        backgroundColor: '#E82DB6',
        height: 40,
        borderRadius: 40
    },
    suggestion: {
        height: screenHeight.height42,
        marginTop: 10
    },
    suggestionText: {
        color: ColorSet.softWhite,
        fontSize: 15,
        marginTop: 5
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
    },
    gpsView: {
        width: screenWidth.width90,
        backgroundColor: '#E02BB61A',
        marginTop: 5,
        paddingLeft: 5,
        borderColor: '#E02BB61A',
        height: screenHeight.height7,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

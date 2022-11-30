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
import { userData } from '../../assets/dummy/videoData';

const Home: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <SafeAreaView style={[AppStyle.flex1, { backgroundColor: ColorSet.backgroundColor }]}>
      <Header homeHeader title="kizombaapp" />
      <View style={styles.searchContainer}>
        {/* <Input
          placeholder="Trouvez une soirée"
          leftIcon /> */}
      </View>
      <ScrollView style={styles.mapView}>
        {userData.map((item: any, index: any) => {
          return (
            <TouchableOpacity style={styles.itemView} onPress={() => navigation.navigate('SelectedDj', { item })}>
              <View style={styles.avatarView}>
                <Image source={{ uri: item.avatarUri }} style={styles.avatarImage} />
              </View>
              <View style={styles.captionView}>
                <View style={AppStyle.row}>
                  <View style={styles.captionTitleView}>
                    <Text style={styles.nameText}>{item.name}</Text>
                    <Text style={styles.captionText}>{item.caption}</Text>
                  </View>
                  <View>
                    <Image source={require('../../assets/images/icons/next.png')} style={styles.nextIcon} />
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
export default Home;

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
    paddingHorizontal: 10,
    backgroundColor: ColorSet.backgroundColor,
    paddingBottom: 10
  },
  itemView: {
    height: screenHeight.height10,
    flexDirection: 'row',
    borderWidth: 1
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
    width: screenWidth.width65
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

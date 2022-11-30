import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import AppStyle from '../../styles/AppStyle';
import { ColorSet, screenHeight, screenWidth } from '../../styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login: React.FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <SafeAreaView style={[AppStyle.flex1, { backgroundColor: ColorSet.backgroundColor }]}>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.topText}>Annuler</Text>
                </TouchableOpacity>
                <Text style={[styles.topText]}>Créer un compte</Text>
            </View>
            <View style={{ paddingTop: 20 }}>
                <Text style={[styles.topText, { fontSize: 16 }]}>Email</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Input />
                </View>
                <Text style={[styles.topText, { fontSize: 16 }]}>Mot de passe</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Input />
                </View>
                <Text style={[styles.topText, { fontSize: 16 }]}>Confirmer mot de passe</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Input />
                </View>
                <Text style={[styles.topText, { fontSize: 14, paddingTop: 100, width: '90%' }]}>En vous inscrivant, vous acceptez notre Contrat d’Utilisation de KizombaWhere et reconnaissez que vous comprenez notre Politique de confidentialité.</Text>
                <Button text='Je m’inscis' style={{ backgroundColor: '#A6AABC99', marginTop: 20 }} onPress={() => navigation.navigate('Home')} />
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={[styles.topText, { fontSize: 14 }]}>Déjà membre ? Connectez-vous</Text>
                </View>
            </View>
        </SafeAreaView >
    );
};
export default Login;

const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorSet.black,
        height: screenHeight.height100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topText: {
        color: ColorSet.softWhite,
        fontSize: 20,
        marginLeft: 20
    }

});

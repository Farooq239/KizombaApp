import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import AppStyle from '../../styles/AppStyle';
import { ColorSet, screenHeight, screenWidth } from '../../styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import SimpleToast from 'react-native-simple-toast';

const Register: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [name, setname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState<Number>()
    const [confirmpassword, setConfirmPassword] = useState<Number>()

    const onPressRegister = () => {
        console.log('here ------?');
        if (!name || !email || !password || !confirmpassword) {
            SimpleToast.show('Please enter your name and email')
            return
        }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "first_name": name,
            "last_name": name,
            "email": email,
            "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:4001/register", requestOptions)
            .then(response => response.text())
            .then(result => {
                SimpleToast.show('User successfully registered')
                navigation.navigate('Login')
            })
            .catch(error => console.log('error', error));
    }
    return (
        <SafeAreaView style={[AppStyle.flex1, { backgroundColor: ColorSet.backgroundColor }]}>
            <ScrollView>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.topText}>Annuler</Text>
                    </TouchableOpacity>
                    <Text style={styles.topText}>Créer un compte</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={[styles.topText, { fontSize: 16 }]}>Nom complet</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Input
                            placeholder='Nom complet'
                            value={name}
                            onChangeText={text => setname(text)}
                        />
                    </View>
                    <Text style={[styles.topText, { fontSize: 16 }]}>Email</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Input
                            placeholder='Email'
                            value={email}
                            onChangeText={text => setEmail(text)}
                        />
                    </View>
                    <Text style={[styles.topText, { fontSize: 16 }]}>Mot de passe</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Input
                            placeholder='Mot de passe'
                            value={password}
                            onChangeText={text => setPassword(text)}
                        />
                    </View>
                    <Text style={[styles.topText, { fontSize: 16 }]}>Confirmer mot de passe</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Input
                            placeholder='Confirmer mot de passe'
                            value={confirmpassword}
                            onChangeText={text => setConfirmPassword(text)}
                        />
                    </View>
                    <Text style={[styles.topText, { fontSize: 14, marginTop: 10, width: '90%', alignSelf: 'center' }]}>En vous inscrivant, vous acceptez notre Contrat d’Utilisation de KizombaWhere et reconnaissez que vous comprenez notre Politique de confidentialité.</Text>
                    <Button text='Je m’inscis' onPress={() => onPressRegister()} />
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={[styles.topText, { fontSize: 16, marginTop: 20 }]}>Déjà membre ? Connectez-vous</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};
export default Register;

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
        marginLeft: 10
    }

});

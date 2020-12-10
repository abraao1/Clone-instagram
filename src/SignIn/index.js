import React , {useState} from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {Container ,
    InputArea, 
    CustomButton, 
    CustomButtonText,
    SignMessagenButtonText, 
    SignMessagenButton,
    SignMessagenButtonTextBold} from './styles';

import SignInput from '../../src/components/SignInput/SignInput';
import axios from "axios"

export default () => {
    const navigation = useNavigation();
    
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        const response = await axios.get('https://5fc28e799210060016869945.mockapi.io/api/user')
        let user = response.data.find((user) => user.email === `${emailField}` );
        let password = response.data.find((user) => user.senha === `${passwordField}`);
        if(user && password) {
         navigation.reset({routes: [{name: 'Feed'}]});
        }else {
            alert("Usário e senha incorreta")
        }
    }

    const handleMessageButtonClick = () => {
       navigation.reset ({
           routes:[{name: 'SignUp'}]
       });

    }
    return (
        <Container>
            <Image source={require('../../assets/logo2.png')}/> 
            <InputArea>
                <SignInput 
                placeholder="Digite seu e-mail"
                value={emailField}
                onChangeText={t=> setEmailField(t)}
                />

                <SignInput 
                placeholder="Digite sua Senha" 
                value={passwordField}
                onChangeText={t=> setPasswordField(t)}
                password={true}
                />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText > LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>
            <SignMessagenButton onPress={handleMessageButtonClick}>
                <SignMessagenButtonText>Ainda não possui uma conta?</SignMessagenButtonText>
                <SignMessagenButtonTextBold>Cadastre-se</SignMessagenButtonTextBold>
            </SignMessagenButton>
        </Container>
    )
}
import React , {useState} from 'react';
import {AsyncStorage, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {Container ,
    InputArea, 
    CustomButton, 
    CustomButtonText,
    SignMessagenButtonText, 
    SignMessagenButton,
    SignMessagenButtonTextBold} from './styles';

import SignInput from '../../src/components/SignInput/SignInput';
import axios from 'axios';


export default () => {

    const navigation = useNavigation();
    
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [nameField, setNameField] = useState('');

    const handleSignClick = async() => {
        if(emailField && passwordField){
            axios.post('https://5fc28e799210060016869945.mockapi.io/api/user',{
            name: `${nameField}`,
            email: `${emailField}`,
            senha:`${passwordField}`
            })
            navigation.reset({routes: [{name: 'Feed'}]});
        }else {
            alert('Preencha os campos')
        }

 }
    const handleMessageButtonClick = () => {
        navigation.reset({routes: [{name:'SignIn'}]});
    }   
    return (
        <Container>
            <Image source={require('../../assets/logo2.png')}/> 

            <InputArea>
            <SignInput 
                placeholder="Digite seu Nome" 
                value={nameField}
                onChangeText={t=> setNameField(t)}
                />

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
                    <CustomButtonText >Crie sua Conta</CustomButtonText>
                </CustomButton>
            </InputArea>
            <SignMessagenButton onPress={handleMessageButtonClick}>
                <SignMessagenButtonText>Já possui uma conta?</SignMessagenButtonText>
                <SignMessagenButtonTextBold>Faça Login</SignMessagenButtonTextBold>
            </SignMessagenButton>
        </Container>
    )
}

import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Button, View} from 'react-native'
import LikeComentario from '../Like/LikeComentario'
const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #A4A4A4;
    flex-direction: row;
    border-radius: 10px;
    paddingHorizontal: 10px;
    align-items: center;
    margin-bottom: 15px;
`;
const Input = styled.TextInput`
    flex: 1;
    font-size:16px;
    color:#000;
    margin-left: 10px;
    `;

const Description = styled.Text`
    padding: 15px;
    line-height: 18px;
`; 
    
export default function components () {
    const [exibir, setExibir]= useState(false);
    const [text, setText] = useState('');
    const [comentarios, setComentarios] = useState([]);

    const onSave =(text) => {
        setExibir(true)
        setComentarios([...comentarios,text])
    }
   
    return (
        <>
        <View>
        <Description>  
              {comentarios}
              
              {exibir && <LikeComentario></LikeComentario>}
          </Description>
        
           <Input 
            placeholder={"Comente"}
            placeholderTextColor="#1C1C1C"
            value={text}
            onChangeText= {(t) => setText(t)}
           />
         
        </View>

        <Button
              title="Salvar"
              onPress={() => onSave(String(text))}
              accessibilityLabel="Salvar">
        </Button>
        </>
    );
}
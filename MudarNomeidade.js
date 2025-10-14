import { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
const[nome, setNome] = useState('');
const[idade, setIdade] = useState('');

  
  return (
    <View style={{ padding: 20, flex:1, justifyContent:'center',alignItems:'center', backgroundColor: 'red' }}>
      <TextInput
      placeholder='digite seu nome' 
      value= {nome}
      onChangeText={ setNome}
      style = {{borderWidth: 1, padding: 20, marginBottom: 50, borderRadius: 15, alignItems: 'center', backgroundColor: 'white'}}
      />
      <Text style={{fontWeight: 'bold', color: 'black'}}>Olá, {nome}</Text>
     
      <View>
         <TextInput
      placeholder ='digite sua idade'
      value= {idade}
      onChangeText={ setIdade}
      style = {{borderWidth: 1, padding: 20, marginBottom: 20, borderRadius: 15, alignItems: 'center', backgroundColor: 'black', color: 'white'}}
      placeholderTextColor='white'
      />
      <Text style={{fontWeight: 'bold', color: 'white'}}>com,{idade}</Text>
      <Button title="Limpar" onPress={() => setNome('') }></Button>
      <Button title="Limpar" onPress={() => setIdade('')}></Button>
      </View>
    </View>
    
    
    
  );
}

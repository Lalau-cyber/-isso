
import React,  { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import {useState} from 'react';


export default function App() {
const [nome, setNome] = useState ('')
const [ Email, setEmail] = useState('')
const [ Senha, setSenha] = useState('')

const validaEmail = (email) => {
  return email.includes('@');
};
const validaSenha = (senha) => {
  return Senha.length >= 6;
};

const handleCadastro = () => {
  if (!nome || !Email || !Senha) {
    Alert.alert('Erro', 'Preencha todos os campos.');
    return;
  }
  if (!validaEmail(Email)) {
    Alert.alert('Erro', 'Digite um e-mail válido.');
    return
  }

  if (!validaSenha(Senha)) {
    Alert.alert('Erro', 'A senha deve ter no mínimo 6 caracteres.');
    return
  };

  Alert.alert('Cadastro Realizado', `Nome: ${nome}\nEmail: ${Email}\nSenha: ${Senha}`);
};
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput style = {styles.input}
      placeholder = "digite seu nome"
      value = {nome}
      onChangeText = {setNome}
      />
      <Text style={styles.label}>E-mail:</Text>
      <TextInput style = {styles.input}
      placeholder = "digite seu E-mail"
      value = {Email}
      onChangeText = {setEmail}
      />
      <Text style={styles.label}>Senha:</Text>
      <TextInput style = {styles.input}
      placeholder = "digite sua senha"
      value = {Senha}
      onChangeText = {setSenha}
      />
      <Button  title="Clique Aqui" onPress={handleCadastro} ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    marginBottom: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
});


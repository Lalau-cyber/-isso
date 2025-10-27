
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';

export default function App() {


  const [users, setUsers] = useState([]);
  const[newUsers, setNewUsers] = useState('');
  const favoritos = []; // Array para armazenar os nomes favoritos

    async function favoritarNome() {
      if (newUsers.trim() !== '') {
        if (!favoritos.includes(newUsers)) {
          favoritos.push(newUsers); // Adiciona o nome ao array de favoritos
          alert(`Nomes favoritos: ${favoritos.join(', ')}`); // Exibe os nomes favoritos em um alerta
        } else {
          alert('Este nome já foi adicionado aos favoritos!');
        }
      } else {
        alert('O nome não pode estar vazio!');
      }
    }

   async function fetchUser() {
    try{
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
       const data = await response.json();
       console.log(data);
       setUsers(data);
    }
    catch(erro){
      console.log(error);
    }
   }
   useEffect(() => {
    fetchUser();
  },[])
  return (
    <View style={styles.container}>
      {users.map((user) => (
      <Text key ={user.id}>{user.name}</Text>
      ))}
      <TextInput
      placeholder = "digite seus favoritos "
      value ={newUsers}
      onChangeText={setNewUsers}/>
      <Button title='👍' onPress={favoritarNome} ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
    border:2,
    borderRadius:20,
    padding: 40
  }
});

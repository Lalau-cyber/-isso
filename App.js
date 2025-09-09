import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert } from 'react-native';

export default function App() {

  function handleButtonPress() {
    Alert.alert(`Botao pressionado`, `voce clicou no botao`)
  }

  function handleTouchablePress() {
    Alert.alert(`Touchable pressionado`, `voce clicou no botao personalizado`)
  }



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ola mundinho</Text>
      <Image source={{ uri: 'https://images.unsplash.com/photo-1610393144490-a930182ad2f1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9yaXpvbnRlJTIwbWFyfGVufDB8fDB8fHww' }}
        style={styles.image}
      />
      <Button title='clique aqui'
        onpress={handleButtonPress}
        style={styles.customButtom} />
      <TouchableOpacity style={styles.customButtom}
        onPress={handleTouchablePress}>
        <Text style={styles.buttonText}> uhuh</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'rgb(220, 250, 252)',
    alingItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },

  image: {
    width: 190,
    height: 190,
    marginBottom: 40
  },

  customButtom: {
    backgroundColor: 'rgb(12, 164, 211)',
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },

  buttonText: {
    color: '#fff',
    fontSize: 16
  }



})

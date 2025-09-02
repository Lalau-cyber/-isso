import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}></Text>
      <Text style={styles.letra}></Text>
      <Saudacao texto = "ola " />
      <MeuNome texto = "Laura"/>
    </View>
  );
}

function Saudacao(props){
  return(
    <Text style={styles.texto}>{props.texto}</Text>

  )
}
function MeuNome(props){
  return(
    <Text style={styles.texto}>{props.texto}</Text>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  texto:{
    fontSize: 30,
    color: `white`
  },

});

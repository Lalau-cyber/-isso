import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>olalaa!</Text>  
        <Image source = {{uri: 'https://static.vecteezy.com/ti/vetor-gratis/t1/7384234-fundo-ceu-azul-e-nuvens-brancas-vetor.jpg'}}
      style={{width:300, 
        height: 300, 
        borderColor:'black', 
        borderWidht:1,
        alignItems: 'center',
        justifyContent: 'top',
        margin: 100,
      }
      }/>
      <Button style={styles.batao} title='Clique ' onPress={()=>alert("você clicou")}/>
      <Button style={styles.batao} title=' aqui' onPress={()=>alert("de novo")}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
    margin: 100,
    
  },
  batao: {
   flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
   alignItems: 'center'

  }

  
 
});

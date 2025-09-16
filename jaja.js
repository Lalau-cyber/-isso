import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Wonwoo</Text> 
        <Image source = {{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzPclpP3mdTtI3ZDsNTfboyD0-vVbae5gQA&s'}}
      style={{width:300, 
        height: 300, 
        borderColor:'black', 
        borderWidht:1,
        alignItems: 'center',
        justifyContent: 'top',
        margin: 70,
        borderRadius: 150
      }
      }/>
      <Text >cantor, dançarino e rapper </Text>

      <View style={styles.batao}>
      <Button  title='mensagem ' onPress={()=>alert("você clicou")}/>
      <Button  title=' seguir' onPress={()=>alert("de novo")}/>
      </View>
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
   alignItems: 'center',
   gap:'20',
   marginBottom: 70
   
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 40

  }

  
 
});

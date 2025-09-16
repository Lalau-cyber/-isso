import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Blusa Yk2</Text> 
        <Image source = {{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8u43mT1vNA_UN24gp7rWAVFIYyaq_YXmUpw&s'}}
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
      <Text >R$ 37,55</Text>

      <View style={styles.batao}>
      <Button  title='comprar ' onPress={()=>alert("comprar feita")}/>

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

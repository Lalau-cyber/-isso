import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, } from 'react-native';
import React, { useState } from 'react'

const App = () => {
  const [corFundo, setCorFundo] = useState('white');

const mudarCor = () => {
  setCorFundo(corFundo === 'white' ? 'black' : 'white');
};
    return (
      <View style={[styles.container, { backgroundColor: corFundo }]}>
        <Text>Wanna Change?</Text>
        <Button title="Mudar Cor" onPress={mudarCor} />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
      flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',

  },
});
export default App;


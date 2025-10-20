
import React,  { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import {useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/Home';
import DetalhesScreen from './screens/Detalhes';

const Stack = createNativeStackNavigator();
export default function App() {

return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Detalhes" component={DetalhesScreen} />
</Stack.Navigator>
</NavigationContainer>
);

}

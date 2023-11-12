import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastrarDoacao from './src/pages/CadastrarDoacao/index'
import HomeScreen from './src/pages/Home/index'
import MinhasDoacoes from './src/pages/MinhasDoacoes';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastrar Doação" component={CadastrarDoacao} />
        <Stack.Screen name="Minhas doações" component={MinhasDoacoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
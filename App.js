import { StatusBar, SafeAreaView, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ApresentacaoQuemSomos from './src/telas/apresentacao/QuemSomos'
import ApresentacaoEquipe from './src/telas/apresentacao/Equipe'
import ApresentacaoProdutos from './src/telas/apresentacao/Produtos'
import ApresentacaoFaleConosco from './src/telas/apresentacao/FaleConosco'

import AgendaHome from './src/telas/agenda/Home'
import AgendaSemanal from './src/telas/agenda/Semanal'

const Tab = createBottomTabNavigator();
const ApresentacaoStack = createNativeStackNavigator();
const AgendaStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Apresentacao">
          {() => (
            <ApresentacaoStack.Navigator>
              <ApresentacaoStack.Screen name="Quem Somos" component={ApresentacaoQuemSomos}  />
              <ApresentacaoStack.Screen name="Produtos" component={ApresentacaoProdutos} />
              <ApresentacaoStack.Screen name="Equipe" component={ApresentacaoEquipe} />
              <ApresentacaoStack.Screen name="Fale Conosco" component={ApresentacaoFaleConosco} />
            </ApresentacaoStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Agenda">
          {() => (
            <AgendaStack.Navigator>
              <AgendaStack.Screen name="Agenda Home" component={AgendaHome} />
              <AgendaStack.Screen name="Agenda Semanal" component={AgendaSemanal} />
            </AgendaStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}



import { StatusBar, SafeAreaView } from 'react-native';
import Apresentacao from './src/telas/Apresentacao'

export default function App() {
  return ( 
    <SafeAreaView>
      <StatusBar />
      <Apresentacao />
    </SafeAreaView>
  );
}

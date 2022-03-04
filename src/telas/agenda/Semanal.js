import React from 'react'
import { View, Text, Button, StyleSheet  } from 'react-native'


export default function AgendaSemanal({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Agenda Semanal</Text>
      <Button
        title="Agenda HOME"
        onPress={() => navigation.push('Agenda Home')}
      />
    </View>
  );
}

const estilos = StyleSheet.create({

});
import React from 'react'
import { View, Text, Button, StyleSheet  } from 'react-native'


export default function AgendaHome({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Agenda</Text>
      <Button
        title="Agenda da Semana"
        onPress={() => navigation.navigate('Agenda Semanal')}
      />
    </View>
  );
}

const estilos = StyleSheet.create({

});
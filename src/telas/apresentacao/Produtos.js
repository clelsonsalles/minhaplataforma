import React from 'react'
import { View, Text, StyleSheet  } from 'react-native'

import PostCMS from '../../componentes/postCMS'
import BotoesNavegacaoApresentacao from './BotoesNavegacao'
import TopoApresentacao from './Topo'

export default function ApresentacaoProdutos({ navigation }){

    return  <>
        <TopoApresentacao />
        <View style={estilos.corpoView}>
            <PostCMS idCategoria='1' idPost='2'  />
            <BotoesNavegacaoApresentacao  navigation={navigation}/>
            <Text style={estilos.textoMais}>
               Direitos: @minhaplataforma
            </Text>
        </View>
    </>
}

const estilos = StyleSheet.create({
    corpoView: {
        paddingVertical: 8,
        paddingHorizontal: 16,

    },
    textoMais: {
        color: "#A3A3A3",
        fontSize: 8,
        lineHeight: 26,
        textAlign: 'right'
    },

});
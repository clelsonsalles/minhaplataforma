import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ImageBackground  } from 'react-native'

import corpo  from '../../assets/imagemTopo.png'
import logo  from '../../assets/logo_pltaforma.png'

import PostCMS from '../componentes/postCMS'

const width = Dimensions.get('screen').width;

export default function Apresentacao(){

    return  <>
        <View style={estilos.containerTopo}>
            <Image source={logo} style={estilos.logo}/>
            <Image source={corpo} style={estilos.imagemCorpo} />
        </View>
        <View style={estilos.corpoView}>
            <PostCMS idCategoria='1' idPost='1'  />
            <Text style={estilos.textoMais}>
               Direitos: @minhaplataforma
            </Text>
        </View>
    </>
}

const estilos = StyleSheet.create({
    containerTopo: {
        alignItems: "center",
    },
    logo:{
        padding: 25,
        width: width  * 0.8,
        height: (150 / 800 * width) * 0.8,
    },
    corpoView: {
        paddingVertical: 8,
        paddingHorizontal: 16,

    },
    imagemCorpo: {
        width: width,
        height: 190 / 266 * width,
    },
    textoMais: {
        color: "#A3A3A3",
        fontSize: 8,
        lineHeight: 26,
        textAlign: 'right'
    },
    titulo:{
      position: "absolute",
      textAlign: "center",
      width: "100%",
      fontSize: 16,
      lineHeight: 26,
      color: "white",
      fontWeight: "bold",
      padding: 16
    },

});
import React from 'react'
import { View, Image, Dimensions, StyleSheet  } from 'react-native'

import corpo  from '../../../assets/imagemTopo.png'
import logo  from '../../../assets/logo_pltaforma.png'

const width = Dimensions.get('screen').width;

export default function TopoApresentacao(){

    return  <>
        <View style={estilos.containerTopo}>
            <Image source={logo} style={estilos.logo}/>
            <Image source={corpo} style={estilos.imagemCorpo} />
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

});
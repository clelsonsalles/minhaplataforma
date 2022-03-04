import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity  } from 'react-native'

import userIcon  from '../../../assets/user.png'
import quemSomosIcon  from '../../../assets/novo-produto.png'
import equipeIcon  from '../../../assets/novo-produto.png'
import faleIcon  from '../../../assets/contato-telefonico.png'

export default function BotoesNavegacaoApresentacao({ navigation }){

    return  <>
            <View style={estilos.containerBotoes}>
                <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Quem Somos')}>
                    <ImageBackground source={userIcon}  resizeMode="center"  style={estilos.imageIcon}>
                    </ImageBackground>
                    <Text style={estilos.textoBotao}>Quem Somos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Produtos')}>
                    <ImageBackground source={quemSomosIcon}  resizeMode="center"  style={estilos.imageIcon}>
                    </ImageBackground>
                    <Text style={estilos.textoBotao}>Produtos</Text>
                </TouchableOpacity>
            </View>
            <View style={estilos.containerBotoes}>
                <TouchableOpacity style={estilos.botao}  onPress={() => navigation.navigate('Equipe')}>
                    <ImageBackground source={equipeIcon}  resizeMode="center"  style={estilos.imageIcon}>
                    </ImageBackground>
                    <Text style={estilos.textoBotao}>Equipe</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Fale Conosco')}>
                    <ImageBackground source={faleIcon}  resizeMode="center"  style={estilos.imageIcon}>
                    </ImageBackground>
                    <Text style={estilos.textoBotao}>Fale Conosco</Text>
                </TouchableOpacity>
            </View>
    </>
}

const estilos = StyleSheet.create({
    botao: {
        alignItems: "center",
        marginTop: 4,
        backgroundColor: '#D3D3D3',
        padding: 8,
        borderRadius: 16,
        width: '40%'
    },
    textoBotao: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 16,
        lineHeight: 16,
        paddingTop: 8,
        fontWeight: 'bold',
    },
    imageIcon: {
        width: 45,
        height: 45,
    },
    containerBotoes: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16
    },

});
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'

import PostCMSService from "../../services/postCMS";

import userIcon  from '../../../assets/user.png'
import quemSomosIcon  from '../../../assets/novo-produto.png'
import equipeIcon  from '../../../assets/novo-produto.png'
import faleIcon  from '../../../assets/contato-telefonico.png'

export default function PostCMS( props ) {
    const postCMSService = new PostCMSService();

    const postCMS = postCMSService.recuperaPost(props.idCategoria, props.idPost);
    return <>
            <Text style={estilos.postTituloHome}>{postCMS.titulo}</Text>
            <View  style={estilos.textoHome}>
                <Text style={estilos.postTextoHome}>{postCMS.texto}</Text>
            </View>
            <View style={estilos.containerBotoes}>
                <TouchableOpacity style={estilos.botao}>
                    <ImageBackground source={userIcon}  resizeMode="center"  style={estilos.userIcon}>
                    </ImageBackground>
                    <Text style={estilos.textoBotao}>Quem Somos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botao}>
                    <ImageBackground source={quemSomosIcon}  resizeMode="center"  style={estilos.userIcon}>
                    </ImageBackground>
                    <Text style={estilos.textoBotao}>Produtos</Text>
                </TouchableOpacity>
            </View>
            <View style={estilos.containerBotoes}>
                <TouchableOpacity style={estilos.botao}>
                    <ImageBackground source={equipeIcon}  resizeMode="center"  style={estilos.userIcon}>
                    </ImageBackground>
                    <Text style={estilos.textoBotao}>Equipe</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botao}>
                    <ImageBackground source={faleIcon}  resizeMode="center"  style={estilos.userIcon}>
                    </ImageBackground>
                    <Text style={estilos.textoBotao}>Fale Conosco</Text>
                </TouchableOpacity>
            </View>

        < />

}

const estilos = StyleSheet.create({
    postTituloHome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    postTextoHome: {
        flexDirection: "row",
        paddingVertical: 12
    },
    postHome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
    },
    botao: {
        alignItems: "center",
        marginTop: 16,
        backgroundColor: '#D3D3D3',
        padding: 16,
        borderRadius: 6,
        width: '40%'
    },
    textoBotao: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 16,
        lineHeight: 16,
        paddingTop: 16,
        fontWeight: 'bold',
    },
    userIcon: {
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



import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

import PostCMSService from "../../services/postCMS";

export default function PostCMS( props ) {
    const postCMSService = new PostCMSService(); 

    const postCMS = postCMSService.recuperaPost(props.idCategoria, props.idPost);
    return <>
            <Text style={estilos.postTituloHome}>{postCMS.titulo}</Text>
            <View  style={estilos.textoHome}>
                <Text style={estilos.postTextoHome}>{postCMS.texto}</Text>
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

});



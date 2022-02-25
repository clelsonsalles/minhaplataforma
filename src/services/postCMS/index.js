import React from 'react'

class PostCMSService {

    recuperaPost = (idCliente, idPost) => {
        postCMS =
        (idCliente == 1 && idPost == 1) ? {
            titulo: '',
            texto:  'A solução "MINHA PLATAFORMA - ISelf" consiste em ' +
                'disponibilizar para os nossos clientes, que podem ser pessoas físicas ou jurídicas, ' +
                'uma identidade digital para que seja registrada a sua presença no mundo virtual, ' +
                'através da geração automática e controlável de um Aplicativo e de um Site web'

        } :
        (idCliente == 1 && idPost == 2) ? {
            titulo: 'Produtos',
            texto:  'asdf asdf asdf asdf aear fgegfhj jh dfgadfqf adfghj sghadsf'
        }:
        {
            titulo: 'Erro',
            texto:  'Erro'
        }

        return postCMS;
    }

}


export default PostCMSService;

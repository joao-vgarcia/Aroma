import React, {Component, Fragment} from 'react'
import './Produtos.css'
import Produto from '../Components/Produto'

export default class Produtos extends Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return(
            <>
                <Produto imagem="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" nomeProduto='Produto 4' identificacao='prodquatro' detalhe='Sabonete' preco='10' />
            </>
        )
    }
}
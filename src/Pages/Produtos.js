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
                <div className="container "><p style={ {paddingTop:'100px' }}></p></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 vejaAqui">
                            <h1> Veja aqui todos os produtos à venda: </h1>
                        </div>
                    </div>
                </div>

                <div className="container-fluid todoPro">

                
                    <div className="container ">
                        <div className="row justify-content-around">

                            <div className="col-sm-12 col-md-4 my-4"><Produto imagem="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" nomeProduto='Produto 4' identificacao='prodquatro' detalhe='Sabonete' preco='10' /></div>
                            <div className="col-sm-12 col-md-4 my-4"><Produto imagem="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" nomeProduto='Produto 4' identificacao='prodquatro' detalhe='Sabonete' preco='10' /></div>
                            <div className="col-sm-12 col-md-4 my-4"><Produto imagem="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" nomeProduto='Produto 4' identificacao='prodquatro' detalhe='Sabonete' preco='10' /></div>
                            <div className="col-sm-12 col-md-4 my-4"><Produto imagem="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" nomeProduto='Produto 4' identificacao='prodquatro' detalhe='Sabonete' preco='10' /></div>
                            <div className="col-sm-12 col-md-4 my-4"><Produto imagem="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" nomeProduto='Produto 4' identificacao='prodquatro' detalhe='Sabonete' preco='10' /></div>
                            <div className="col-sm-12 col-md-4 my-4"><Produto imagem="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" nomeProduto='Produto 4' identificacao='prodquatro' detalhe='Sabonete' preco='10' /></div>
                            <div className="col-sm-12 col-md-4 my-4"><Produto imagem="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" nomeProduto='Produto 4' identificacao='prodquatro' detalhe='Sabonete' preco='10' /></div>
                            <div className="col-sm-12 col-md-4 my-4"><Produto imagem="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" nomeProduto='Produto 4' identificacao='prodquatro' detalhe='Sabonete' preco='10' /></div>

                        </div>
                        
                    </div>

                </div>
                
            </>
        )
    }
}
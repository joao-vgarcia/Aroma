import React, { Component, Fragment } from 'react'
import './Home.css'
import Produto from '../Components/Produto'






export default class Home extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    //funções




    //fim funções

    render() {
        return (
            <>
             
                <div className='principal container-fluid d-none d-sm-none d-md-block'>
                    <h1 className='aVenda'></h1>
                    
                </div>
                <div className='principalcelular container-fluid d-block d-sm-block d-md-none d-lg-none'>
                    <h1 className='aVendacelular '></h1>
                    
                </div>
                
                
                <div className='container-fluid produtos' style={{paddingTop:'40px', paddingBottom:'40px'}}>
                    <div className='container mx-auto card-columns'>
                        <Produto imagem="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" nomeProduto='Produto 1' identificacao='produto' detalhe='Sabonete' preco='10' />
                        <Produto imagem="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" nomeProduto='Produto 2' identificacao='produtodois' detalhe='Shampoo' preco='10'/>
                        <Produto imagem="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" nomeProduto='Produto 3' identificacao='prodtres' detalhe='Conjunto' preco='10'/>
                        <Produto imagem="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" nomeProduto='Produto 4' identificacao='prodquatro' detalhe='Sabonete' preco='10'/>
                        <Produto imagem="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" nomeProduto='Produto 5' identificacao='prodcinco' detalhe='P5' preco='10'/>
                        <Produto imagem="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" nomeProduto='Produto 6' identificacao='prodseis' detalhe='P6' preco='10'/>                
                    </div>
                </div>


                {/** Botão para mostrar mais produtos */}

                <div className='container-fluid fundo1'>
                    <div className='row justify-content-center'>
                        <button className='btn col-11 botao1 my-5'>Produtos</button>

                    </div>
                    <div className='row justify-content-center'>
                        <button className='btn col-11 botao1 my-5'>Contato</button>

                    </div>

                </div>
               
            </>
        )
    }

}


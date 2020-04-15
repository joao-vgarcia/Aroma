import React, { Component, Fragment } from 'react'
import './Home.css'
import Produto from '../Components/Produto'
import { Link } from 'react-router-dom';






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


                <div className='container-fluid produtos' style={{ paddingTop: '40px', paddingBottom: '40px' }}>
                    <div className='container'>
                        <div className="row justify-content-between my-2">
                            {/**máximo de 3 por linha */}
                            <div className="col-sm-12 col-md-4 my-2">
                                <Produto imagem="https://i.pinimg.com/474x/bd/94/4a/bd944a37571a06040293ef21ff324180.jpg" nomeProduto='Produto 1' identificacao='produto' detalhe='Sabonete' preco='10' />
                            </div>
                            <div className="col-sm-12 col-md-4 my-2">
                                <Produto imagem="https://i.pinimg.com/474x/77/86/cb/7786cb0c9aae8431e85ac67bb720d08d.jpg" nomeProduto='Produto 2' identificacao='produtodois' detalhe='Shampoo' preco='10' />
                            </div>
                            <div className="col-sm-12 col-md-4 my-2">
                                <Produto imagem="https://i.pinimg.com/474x/a1/12/99/a1129913d86b198cd78981c6fabd8f39.jpg" nomeProduto='Produto 3' identificacao='prodtres' detalhe='Conjunto' preco='10' />
                            </div>
                        </div>
                        <div className="row justify-content-between my-2">
                            {/**máximo de 3 por linha */}
                            <div className="col-sm-12 col-md-4 my-2">
                                <Produto imagem="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" nomeProduto='Produto 4' identificacao='prodquatro' detalhe='Sabonete' preco='10' />
                            </div>
                            <div className="col-sm-12 col-md-4 my-2">
                                <Produto imagem="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" nomeProduto='Produto 5' identificacao='prodcinco' detalhe='P5' preco='10' />
                            </div>
                            <div className="col-sm-12 col-md-4 my-2">
                                <Produto imagem="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" nomeProduto='Produto 6' identificacao='prodseis' detalhe='P6' preco='10' />
                            </div>
                        </div>






                    </div>
                </div>


                {/** Botão para mostrar mais produtos */}

                <div className='container-fluid fundo1'>
                    <div className='row justify-content-center'>
                        <Link to="/produtos" className='btn col-10 botao1 my-5'>Produtos</Link>

                    </div>
                    <div className='row justify-content-center'>
                        <Link to="/contato" className='btn col-10 botao1 my-5'>Contato</Link>

                    </div>

                </div>

            </>
        )
    }

}


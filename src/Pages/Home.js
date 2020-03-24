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
                {/**Display para pc */}
                <div className='principal container-fluid d-none d-sm-none d-md-block'>
                    <h1 className='aVenda'></h1>
                </div>
                <div className='container-fluid d-none d-sm-none d-md-block'>
                    <h1 className='titulo'>Veja os principais itens à venda</h1>
                </div>
                <div className='container-fluid produtos d-none d-sm-none d-md-block' >
                    <div className='container card-columns lista'>
                        <Produto nomeProduto='Produto 1' detalhe='P1' />
                        <Produto nomeProduto='Produto 2' detalhe='P2' />
                        <Produto nomeProduto='Produto 3' detalhe='P3' />
                        <Produto nomeProduto='Produto 4' detalhe='P4' />
                        <Produto nomeProduto='Produto 5' detalhe='P5' />
                        <Produto nomeProduto='Produto 6' detalhe='P6' />
                    </div>
                </div>





                {/**Display para celular */}
                <div className='principalcelular container-fluid d-block d-sm-block d-md-none'>
                    <h1 className='aVendacelular'></h1>
                </div>
                <div className='container-fluid d-block d-sm-block d-md-none'>
                    <h1 className='titulo'>Veja os principais itens à venda</h1>
                </div>
                <div className='container-fluid produtos d-block d-sm-block d-md-none' >
                    <div className='container card-columns lista'>
                        <Produto nomeProduto='Produto 1' detalhe='P1' />
                        <Produto nomeProduto='Produto 2' detalhe='P2' />
                        <Produto nomeProduto='Produto 3' detalhe='P3' />
                        <Produto nomeProduto='Produto 4' detalhe='P4' />
                        <Produto nomeProduto='Produto 5' detalhe='P5' />
                        <Produto nomeProduto='Produto 6' detalhe='P6' />
                    </div>
                </div>

                {/** Botão para mostrar mais produtos */}

                <div className='container-fluid fundo1'>
                    <div className='row justify-content-center'>
                        <button className='btn col-10 botao1 my-5'>Todos produtos</button>

                    </div>
                    <div className='row justify-content-center'>
                        <button className='btn col-10 botao1 my-5'>Entre em contato</button>

                    </div>

                </div>
               
            </>
        )
    }

}


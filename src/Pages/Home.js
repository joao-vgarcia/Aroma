import React, { Component, Fragment } from 'react'
import './Home.css'






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
                    <h1 className='aVenda'>Veja os principais itens à venda</h1>
                </div>
                <div className='container-fluid produtos d-none d-sm-none d-md-block' >

                    <div className='container card-columns lista'>

                        <div className="card cartoes" >
                            <img className="card-img-top" src="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" alt="Card image" />
                            <div className="card-body">
                                <h4 className="card-title">Produto x</h4>
                                <p className="card-text">Detalhes do produto X</p>
                                <a href="#" className="btn btn-block btn-primary">Comprar</a>
                            </div>
                        </div><div className="card cartoes" >
                            <img className="card-img-top" src="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" alt="Card image" />
                            <div className="card-body">
                                <h4 className="card-title">Produto x</h4>
                                <p className="card-text">Detalhes do produto X</p>
                                <a href="#" className="btn btn-block btn-primary">Comprar</a>
                            </div>
                        </div><div className="card cartoes" >
                            <img className="card-img-top" src="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" alt="Card image" />
                            <div className="card-body">
                                <h4 className="card-title">Produto x</h4>
                                <p className="card-text">Detalhes do produto X</p>
                                <a href="#" className="btn btn-block btn-primary">Comprar</a>
                            </div>
                        </div><div className="card cartoes" >
                            <img className="card-img-top" src="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" alt="Card image" />
                            <div className="card-body">
                                <h4 className="card-title">Produto x</h4>
                                <p className="card-text">Detalhes do produto X</p>
                                <a href="#" className="btn btn-block btn-primary">Comprar</a>
                            </div>
                        </div>
                        <div className="card cartoes" >
                            <img className="card-img-top" src="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" alt="Card image" />
                            <div className="card-body">
                                <h4 className="card-title">Produto x</h4>
                                <p className="card-text">Detalhes do produto X</p>
                                <a href="#" className="btn btn-block btn-primary">Comprar</a>
                            </div>
                        </div>
                        <div className="card cartoes" >
                            <img className="card-img-top" src="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" alt="Card image" />
                            <div className="card-body">
                                <h4 className="card-title">Produto x</h4>
                                <p className="card-text">Detalhes do produto X</p>
                                <a href="#" className="btn btn-block btn-primary">Comprar</a>
                            </div>
                        </div>



                    </div>


                </div>




                {/**Display para celular */}
                <div className='principalcelular container-fluid d-block d-sm-block d-md-none'>
                    <h1 className='aVendacelular'>Veja os principais itens à venda</h1>
                </div>

                <div className='container-fluid produtos d-block d-sm-block d-md-none' >

                    <div className='container card-columns lista'>

                        <div className="card cartoes" >
                            <img className="card-img-top" src="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" alt="Card image" />
                            <div className="card-body">
                                <h4 className="card-title">Produto x</h4>
                                <p className="card-text">Detalhes do produto X</p>
                                <a href="#" className="btn btn-block btn-primary">Comprar</a>
                            </div>
                        </div><div className="card cartoes" >
                            <img className="card-img-top" src="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" alt="Card image" />
                            <div className="card-body">
                                <h4 className="card-title">Produto x</h4>
                                <p className="card-text">Detalhes do produto X</p>
                                <a href="#" className="btn btn-block btn-primary">Comprar</a>
                            </div>
                        </div><div className="card cartoes" >
                            <img className="card-img-top" src="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" alt="Card image" />
                            <div className="card-body">
                                <h4 className="card-title">Produto x</h4>
                                <p className="card-text">Detalhes do produto X</p>
                                <a href="#" className="btn btn-block btn-primary">Comprar</a>
                            </div>
                        </div><div className="card cartoes" >
                            <img className="card-img-top" src="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" alt="Card image" />
                            <div className="card-body">
                                <h4 className="card-title">Produto x</h4>
                                <p className="card-text">Detalhes do produto X</p>
                                <a href="#" className="btn btn-block btn-primary">Comprar</a>
                            </div>
                        </div>
                        <div className="card cartoes" >
                            <img className="card-img-top" src="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" alt="Card image" />
                            <div className="card-body">
                                <h4 className="card-title">Produto x</h4>
                                <p className="card-text">Detalhes do produto X</p>
                                <a href="#" className="btn btn-block btn-primary">Comprar</a>
                            </div>
                        </div>
                        <div className="card cartoes" >
                            <img className="card-img-top" src="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" alt="Card image" />
                            <div className="card-body">
                                <h4 className="card-title">Produto x</h4>
                                <p className="card-text">Detalhes do produto X</p>
                                <a href="#" className="btn btn-block btn-primary">Comprar</a>
                            </div>
                        </div>



                    </div>


                </div>







            </>
        )
    }

}


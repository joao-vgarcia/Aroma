import React, { Component, Fragment } from 'react'
import './Produto.css'


export default class Produto extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className="card cartoes" >
                    <img className="card-img-top" src="https://lojacutcolor.com.br/product_images/o/845/Dark_Sab._Artesanal__33505_thumb.jpg" alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.nomeProduto}</h4>
                        <p className="card-text">{this.props.detalhe}</p>
                        <a href="#" className="btn btn-block btn-primary">Comprar</a>
                    </div>
                </div>

            </>
        )
    }
}

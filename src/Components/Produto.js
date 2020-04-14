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
                    <img className="card-img-top" src={this.props.imagem} alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.nomeProduto}</h4>
                        <p className="card-text">R$ {this.props.preco}</p>
                        <button type="button" className="btn btn-block" style={{backgroundColor:"#e6ffe6"}}data-toggle="modal" data-target={`#${this.props.identificacao}`}  >Comprar</button>
                    </div>
                </div>

                <div className="modal" id={this.props.identificacao}>
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title">{this.props.nomeProduto}</h4>
                                
                            </div>


                            <div className="modal-body">
                                <img className="img-fluid" src={this.props.imagem} alt="Card image" />
                                <p className="card-text">{this.props.detalhe}</p>
                                <p className="card-text">{this.props.preco}</p>
                                
                            </div>


                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Fechar</button>
                            </div>

                        </div>
                    </div>
                </div>

            </>
        )
    }
}

import React, { Component, Fragment } from 'react'
import './Sidebar.css'
import { MdSpa, MdFilterVintage } from "react-icons/md";
import Aroma from '../Images/aroma.png'

export default class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            lugar: '0px'
        };
    }

    openNav = () => {
        this.setState({ lugar: '60%' })
    }
    closeNav = () => {
        this.setState({ lugar: '0px' })
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-sm fixed-top" style={{ backgroundColor: '#22b0b4' }}>
                    <button className="btn" onClick={this.openNav} style={{ width: '60px', height: '60px', marginLeft: '1px' }}><MdFilterVintage style={{ color: 'white', fontSize: '40px' }} /></button>
                    <div id="mySidenav" className="sidenav" style={{ width: this.state.lugar, transition: '0.5s' }}>
                        <button className="btn" onClick={this.closeNav} style={{ width: '60px', height: '60px', marginTop: '-70px', marginLeft: '20px' }}><MdSpa style={{ color: 'white', fontSize: '40px' }} /></button>
                        <a href="#">Home</a>
                        <a href="#">Produtos</a>

                        <a href="#">Contato</a>
                        <a href="#" className='d-none d-sm-none d-md-none d-lg-block'><img src={Aroma} id='img-nav' /></a>
                    </div>
                    <a href="#"><img src={Aroma} id='img-nav' /></a>
                </nav>
              
            </>
        )
    }


}

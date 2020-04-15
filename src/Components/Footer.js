import React, {Component,Fragment, useState} from 'react';
import {MdLocalPostOffice} from "react-icons/md";
import { IoLogoInstagram, IoIosCall} from "react-icons/io";
import './Footer.css';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const Email = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <Button id="Email" type="button" className="btn-block" style={{backgroundColor:'unset', border:'none'}}>
        <MdLocalPostOffice style={{fontSize:'40px', color:'white'}}/>
      </Button>
      <Popover placement="top" isOpen={popoverOpen} target="Email" toggle={toggle}>
        <PopoverHeader>Email</PopoverHeader>
        <PopoverBody>aromacasagrande@hotmail.com</PopoverBody>
      </Popover>
    </div>
  );
}
const Telefone = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <Button id="Telefone" type="button" className="btn-block" style={{backgroundColor:'unset', border:'none'}}>
        <IoIosCall style={{fontSize:'40px', color:'white'}}/>
      </Button>
      <Popover placement="top" isOpen={popoverOpen} target="Telefone" toggle={toggle}>
        <PopoverHeader>Contato</PopoverHeader>
        <PopoverBody style={{marginLeft:'30px', marginRight:'30px'}}>985678315</PopoverBody>
        <PopoverBody style={{marginLeft:'30px', marginRight:'30px'}}>986858315</PopoverBody>
      </Popover>
    </div>
  );
}

export default class Footer extends Component{
    constructor(){
        super();
        this.state ={

        }
    }

    render(){
        return(
            <>
                <div className="container-fluid footerback">
                    <div className='row justify-content-center '>
                      
                        <div className="col-md-12 col-sm-12 sobreFooter">
                            <p style={{fontSize:'30px', color:"white", marginTop:'60px'}}>Todo aroma tem uma história. </p>
                        </div>
                       
                    </div>

                    <div className="row justify-content-center">
                      <div className="col-sm-12 col-md-2"> <a href='https://www.instagram.com/aromacasagrande/' className="btn-block" target='blank'><IoLogoInstagram style={{fontSize:'40px', color:"white"}} className="teste"/> </a></div>
                      <div className="col-md-2"><Email/></div>
                      <div className="col-md-2"><Telefone/></div>
                    </div>

                    <div className="row justify-content-center sobreFooter">
                      <div className="col-12">
                        <p style={{fontSize:'20px', color:"white", marginTop:'60px'}}>Feito por João Vitor Garcia</p>
                      </div>
                    </div>
                </div>






            </>
        )
    }
}


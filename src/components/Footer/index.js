import React from 'react';
import './styles.css';
import Logo from '../../assets/mmlogopronta.png'
import Icone from '../../assets/logo-icone.png'
import { FaFacebookSquare, FaInstagram, FaWhatsapp, FaPhone, FaMailBulk } from 'react-icons/fa';

export default function Footer() {
    return(
        <div>
            <div id="footer-container">
                <div id="footer-left">
                    <a href="/">Home</a> <br/>
                    <a href="/servicos">Áreas de atuação</a> <br/>
                    <a href="/sobre">O escritório</a> <br/>
                    <a href="/contato">Fale conosco</a> <br/>
                </div>
                <div id="footer-center">
                    <img src={Logo} alt="LOGO"/> <br/>
                    <div id="phone" className="footer-gadgets">
                        <FaPhone />
                        <a href="https://api.whatsapp.com/send?phone=5587998231388" target="_blank">(87) 99823-1388</a>
                    </div>
                    <div id="mail" className="footer-gadgets">
                        <FaMailBulk />
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amandamagalhaesjus@gmail.com" target="_blanc">amandamagalhaesjus@gmail.com</a> <br/>
                    </div>  
                    <div id="copy">
                    <p>© Amanda Magalhães - Advocacia e consultoria jurídica <br/> Todos os direitos reservados</p>
                    </div>                  
                </div>
                <div id="footer-right">
                    <p>Siga-nos nas redes sociais:</p>
                    <a href="/"><FaFacebookSquare id="facebook"/></a>
                    <a href="https://instagram.com/amandamagalhaesadv?igshid=yrol7s0brugb"><FaInstagram id="insta"/></a>
                    <a href="https://api.whatsapp.com/send?phone=558798231388" target="_blank" style={{color: "#25d366"}}><FaWhatsapp /></a>
                </div>
            </div>
            <div id="dev-container">
                <p>Developed by:</p>
                <a href="https://instagram.com/ts.softwares?igshid=l1clfg7jtmve"> <img src={Icone} alt="icone"/> </a>
            </div>
        </div>
        
    );
}
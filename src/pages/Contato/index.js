import React, { useState } from 'react';
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './styles.css';
import api from '../../services/api';
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contato() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [msgm, setMsgm] = useState('');

    function clearInput() {
        setName('');
        setEmail('');
        setPhone('');
        setMsgm('');
    }

    async function handleEmail(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            phone,
            msgm,
        };

        try {
            const response = await api.post('emails', data);
            toast.success("Mensagem enviada! Retornaremos o mais breve possível.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
            
            clearInput();
        } catch (err) {
            toast.success("Erro ao enviar a mensagem, tente novamente!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
        }

        try {
            const response =  await api.post('clients', data);
        } catch(err) {
            console.log(err);
        }
    }

    function onlynumber(evt) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode( key );
        //var regex = /^[0-9.,]+$/;
        var regex = /^[0-9.]+$/;
        if( !regex.test(key) ) {
           theEvent.returnValue = false;
           if(theEvent.preventDefault) theEvent.preventDefault();
        }
    }
    
    return (
        <div id="contact-container">
            <hr/>
            <div id="form-contact">
                <form onSubmit={handleEmail} method="post" id="contact-form">
                    <h1>Fale conosco</h1>
                    <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} /> <br/>
                    <div id="input-box">
                        <input type="text" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/> <br/>
                        <input placeholder="Telefone" maxLength={11} onKeyPress={onlynumber} value={phone} onChange={e => setPhone(e.target.value)} /> <br/>
                    </div>
                    <textarea name="" id="" placeholder="Sua mensagem" value={msgm} onChange={e => setMsgm(e.target.value)} ></textarea> <br/>
                    <button type="submit">Enviar</button>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        closeButton={false}
                    /> 
                </form>
            
                <div id="social-contact">
                    <h2>Siga-nos nas redes sociais:</h2>
                    <a href=""><FaFacebookSquare id="facebook" size={40}/></a>
                    <a href="https://instagram.com/amandamagalhaesadv?igshid=yrol7s0brugb"><FaInstagram id="insta" size={40}/></a>
                    <a href="https://api.whatsapp.com/send?phone=558798231388" target="_blank" style={{color: "#25d366"}}><FaWhatsapp  size={40}/></a>
                </div>
            </div>
        </div>
    );
}
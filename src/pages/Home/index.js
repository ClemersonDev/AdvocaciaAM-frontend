import React, { useState } from 'react';
import './styles.css';
import Logo from '../../assets/mmlogopronta.png';
import advogada from '../../assets/advogada.jpg';
import Carrossel from '../../components/Carrossel';
import api from '../../services/api';
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    
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
        <div className="container" id="container">
            <div className="container2" id="home-container">
                <div id="home-left">
                    <img src={Logo} alt="LOGO" />
                </div>
                
                <div id="home-right">
                    <p>"Serviços jurídicos prestados com excelência<br/>Solucionar o seu problema é a nossa missão!"</p>
                </div>                
            </div>
            
            <div id="carrossel-container">
                <Carrossel id="carousel" />
            </div>

            <div className="container2" id="home-container2">
                <div id="left-container">
                    <div id="picture">
                        <img src={advogada} alt="adv"/>
                    </div>
                    <div id="perfil">
                        <p>Amanda Raquel Freire de Magalhães é advogada devidamente inscrita na Ordem dos Advogados do Brasil formada em direito pela FIESC-TO, é pós-graduada em direito penal e Processo Penal pelo tradicional Complexo de Ensino Damásio de Jesus. É frequentadora constante de vários cursos de aprimoramento profissional formados por grandes mestres em Direito e profissionais de notório saber jurídico que contribuem com o conhecimento e enriquecimento jurídico dessa causídica;</p>
                    </div>           
                </div>
                <br/>
                <div id="right-container">
                    <p>Fale conosco</p>
                    <form onSubmit={handleEmail} method="post" id="form-container">
                        <div id="form-left">                            
                            <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} /> <br/>
                            <input type="text" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} /> <br/>
                            <input placeholder="Telefone" maxLength={11} value={phone} onKeyPress={onlynumber} onChange={e => setPhone(e.target.value)}/> <br/>
                        </div>                        
                        <div id="form-right">
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
                        </div>
                    </form>                    
                </div>                
            </div>
        </div>
    );
}
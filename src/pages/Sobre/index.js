import React from 'react';
import logoTransp from '../../assets/logotransparente.png';
import './styles.css';
import advogada from '../../assets/advogada.jpg';

export default function Sobre() {
    return (
        <div id="about-container">
            <hr/>
            <h1>Quem somos</h1>
            <div id="left-container2">
                    <div id="picture2"> <img src={advogada} alt=""/> </div>
                    <div id="perfil1">
                        <p>Amanda Raquel Freire de Magalhães é advogada devidamente inscrita na Ordem dos Advogados do Brasil formada em direito pela FIESC-TO, é pós-graduada em direito penal e Processo Penal pelo tradicional Complexo de Ensino Damásio de Jesus. É frequentadora constante de vários cursos de aprimoramento profissional formados por grandes mestres em Direito e profissionais de notório saber jurídico que contribuem com o conhecimento e enriquecimento jurídico dessa causídica;</p>
                    </div>    
                    <div id="perfil2">
                        <p>É militante da advocacia criminal; atuando primordialmente em Direito Criminal em diversos crimes definidos pelo Código Penal, bem como em Legislação extravagante, que agrupam entre outros, a defesa penal ou investigação policial, pessoas físicas ou jurídicas de médio e pequeno porte que voluntariamente ou involuntariamente se vejam envolvidos com crimes relacionados a seus negócios ou atividades comerciais.
	Durante a caminhada, a presente causídica encontrou outras duas paixões, além do Direito Criminal. Sendo o Direito de família e sucessões e o Direito imobiliário duas áreas na qual atua com habitualidade, conhecimento e experiência.
</p>
                    </div>       
            </div>
            <div id="about-box">
                <div id="top">
                    <h2>O escritório</h2>
                    <p>O Escritório Amanda Magalhães Advocacia e consultoria jurídica atua em todo o território nacional nas áreas criminal e cível, com maior ênfase nos Estados do Pernambuco, Bahia e Tocantins, capital e interior.</p>
                </div>
                <div id="midle">
                    <div id="midle-left">
                        <p> A atuação, tanto de forma consultiva como contenciosa, tem como destinatários pessoas físicas ou jurídicas, visando sempre a proteção de garantias e de direitos fundamentais dos seus clientes.
	 Com vasta experiência no estudo e aplicação do direito, o escritório apresenta sólida atuação no mercado da Advocacia Criminal e Cível, notabiliza-se ao cliente  por desenvolver seus trabalhos aliando técnica, agilidade, estratégia e estudo da causa. 
</p>
                    </div>
                    <div id="midle-right">
                        <img src={logoTransp} alt="Logo"/>
                    </div>
                </div>
                <div id="bottom">
                    <p>O Escritório Amanda Magalhães Advocacia e consultoria jurídica pauta sua atuação nos seguintes valores: sigilo, ética, comprometimento, estratégia, disponibilidade, acessibilidade, conhecimento técnico atualizado e dedicação total.</p>
                </div>
                <br/> <br/>
                <div id="social-box">
                    <h2>Responsabilidade Social</h2>
                    <p>Além da atuação “pro bono”, o escritório exerce sua responsabilidade social por meio do incentivo a eventos jurídicos ou sociais.
Da mesma forma, o a advogada Amanda Magalhães se disponibiliza a palestrar em eventos que não tenham fins lucrativos, sobretudo em universidades ou na OAB, auxiliando na formação de estudantes e jovens advogados e conscientização da sociedade.
</p>
                </div>
                
                <div id="call-client">
                    <div id="call-left">
                        <h3>Quer saber mais sobre nosso escritório de advocacia?</h3>
                        <h4>Entre em contato e tire suas dúvidas.</h4>
                    </div>
                    <div id="call-right">
                        <a href="/contato" className="btnp">Fale conosco</a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
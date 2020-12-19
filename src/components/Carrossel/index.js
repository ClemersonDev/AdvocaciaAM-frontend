import React from 'react';
import './styles.css';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import dCivil from '../../assets/adv1.webp';
import dCriminal from '../../assets/adv3.webp';
import dImobiliario from '../../assets/adv2.webp';

export default function Carrossel() {
    return(
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={dCivil}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Direito Criminal</h3>
                    <a href="/servicos" className="btnp">Conheça nossas áreas de atuação</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={dCriminal}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Direito Criminal</h3>
                    <a href="/servicos" className="btnp">Conheça nossas áreas de atuação</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={dImobiliario}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Direito Criminal</h3>
                    <a href="/servicos" className="btnp">Conheça nossas áreas de atuação</a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
import React from 'react';
import { FaPhone } from 'react-icons/fa';
import "./styles.css";

export default function Header() {
    return(
        <div id="header">
            <div id="left">
                <p>Advogada Criminalista</p>
            </div>
            <div id="right">
                <FaPhone />
                <p>(87) 99823-1388</p>
            </div>
        </div>
    );
}
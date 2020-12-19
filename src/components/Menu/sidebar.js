import React from 'react';
import { stack as Menu } from 'react-burger-menu';

export default (props) => {
  return (
    <Menu {...props}>
      <a className="menu-item" id="menu-link" href="/">
        Home
      </a>

      <a className="menu-item" id="menu-link" href="/servicos">
        Áreas de atuação
      </a>

      <a className="menu-item" id="menu-link" href="/sobre">
        O escritório
      </a>

      <a className="menu-item" id="menu-link" href="/contato">
        Fale conosco
      </a>
    </Menu>
  );
};
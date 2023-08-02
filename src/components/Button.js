import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primario', 'btn--vazado']

/* Teremos 2 tipos de botões. Estamos setando aqui qual dos dois será
mostrado ao instancia-lo no App.js através do estilo*/

const SIZES = ['btn--medio', 'btn--largo']; 
export const Button = ({conteudo, type, onClick,
    buttonStyle, buttonSize}) => {
        const checkEstiloBotao =
         STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

         const checkTamanhoBotao =
          SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

          return (
            <Link to='/sign-up' className='btn-mobile'>
                <button 
                className={'btn ${checkEstiloBotao} ${checkTamanhoBotao}'}
                onClick={onClick}
                type={type}
                >
                    {conteudo} 
                </button>
            </Link>
          )
    };


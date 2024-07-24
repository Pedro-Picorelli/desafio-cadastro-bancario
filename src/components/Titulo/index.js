import Botao from 'components/Botao';
import style from './Titulo.module.css';
import { Link } from 'react-router-dom';

function Titulo({text, mensagemBotao}) {
    return(
        <div className={style.container}>
            <h1>{text}</h1>
            {mensagemBotao ? <Link to="./Listagem" ><Botao>{mensagemBotao}</Botao></Link> : ''}
        </div>
    )
}

export default Titulo;
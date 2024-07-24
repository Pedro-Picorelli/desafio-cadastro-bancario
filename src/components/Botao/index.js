import { useCadastradoContext } from 'contextos/Cadastros'
import style from './Botao.module.css'

const Botao = ({text,func}) => {
    return (
        <button onClick={func ? () => func('teste pesro'): null}
        
            className={style.botao}
        >
            {text}
        </button>
    )
}

export default Botao;
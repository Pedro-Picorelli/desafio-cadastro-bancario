import { useCadastradoContext } from 'contextos/Cadastros'
import style from './BotaoAcao.module.css'

const BotaoAcao = ({children, func}) => {

    return (
        <button 
            onClick={func ? func() : null} 
            className={style.botao}
        >Pesquisar
            {children}
        </button>
    )
}

export default BotaoAcao;
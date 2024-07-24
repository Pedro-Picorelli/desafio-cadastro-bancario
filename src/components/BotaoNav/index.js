import style from './BotaoNav.module.css'

const Botao = ({children, func}) => {
    return (
        <button onClick={func ? func('t') : null}  className={style.botao}>
            {children}
        </button>
    )
}

export default Botao
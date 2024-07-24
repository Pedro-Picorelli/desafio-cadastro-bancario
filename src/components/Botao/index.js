import style from './Botao.module.css'

const Botao = ({children}) => {
    return (
        <button className={style.botao}>
            {children}
        </button>
    )
}

export default Botao
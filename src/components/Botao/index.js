import './Botao.modules.css'

const Botao = ({children}) => {
    return (
        <button className='botao'>
            {children}
        </button>
    )
}

export default Botao
import style from './Secao.module.css'

function Secao({ children }) {
    return(
        <section className={style.sec}>
            {children}
        </section>
    )
}

export default Secao;
import style from './institucoesBancarias.module.css'
import React, { useState, useEffect } from 'react';

function Conteudo() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://brasilapi.com.br/api/banks/v1')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    return (
        <section className={style.conteudo}>
            {data.map(e => <p>{e.name}</p>)}
        </section>
    )
}

export default Conteudo;
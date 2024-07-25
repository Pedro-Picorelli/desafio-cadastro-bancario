import Titulo from 'components/Titulo';
import * as React from 'react';
import style from './Listagem.module.css';
import Secao from 'components/Secao';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Botao from 'components/Botao';
import { TextField } from '@mui/material';
import { useBancoSelectContext } from 'contextos/BancoSelect';
import { Link } from 'react-router-dom';

function Listagem() {

    const {selecionarBanco} = useBancoSelectContext();

    const [dataBank, setDataBank] = useState([]);
    const [codigoBanco, setCodigoBanco] = useState('');
    const [pesquisa, setPesquisa] = useState('https://brasilapi.com.br/api/banks/v1');

    const montarPesquisa = () => {
        if (codigoBanco) {
            setPesquisa(`https://brasilapi.com.br/api/banks/v1/${codigoBanco}`);
        } else {
            setPesquisa('https://brasilapi.com.br/api/banks/v1');
        }
    };

    useEffect(() => {
        fetch(pesquisa)
            .then(response => response.json())
            .then(dataBank => setDataBank(dataBank))
            .catch(error => console.error('Erro ao buscar os dados:', error));
    }, [pesquisa]); // Adicionando 'pesquisa' como dependência do useEffect

    return (
        <>
            <Titulo text="Escolha uma instituição bancária" />
            <Secao className={style.sec}>
                <>
                    <TextField
                        className={style.textField}
                        id="outlined-number"
                        label="Código do banco"
                        type="number"
                        value={codigoBanco}
                        onChange={(e) => setCodigoBanco(e.target.value)}
                    />
                    <Botao text="Pesquisar" func={montarPesquisa} />
                    <Box
                        sx={{
                            '& > *': {
                                m: 1,
                            },
                        }}
                    >
                        <ButtonGroup
                            orientation="vertical"
                            aria-label="Vertical button group"
                            variant="text"
                        >
                            {dataBank.length ?
                                dataBank.map((bank, i) => (<Link key={i} to="/Cadastro" ><Button size="large" onClick={() => selecionarBanco(bank)} key={i}>{bank.name}</Button ></Link>)) :
                                dataBank.name ?
                                <Link to="/Cadastro" ><Button>{dataBank.name}</Button></Link> : <p>Código do banco não encontrado</p>}
                        </ButtonGroup>
                    </Box>
                </>
            </Secao>
        </>
    );
}

export default Listagem;

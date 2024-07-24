import Titulo from 'components/Titulo';
import * as React from 'react';
import style from './Listagem.module.css';
import Secao from 'components/Secao';
import Pesquisa from 'components/Pesquisa';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Botao from 'components/Botao';
import { TextField } from '@mui/material';

function Listagem() {
    const [dataBank, setDataBank] = useState([]);
    const [codigoBanco, setCodigoBanco] = useState('');
    const [pesquisa, setPesquisa] = useState('https://brasilapi.com.br/api/banks/v1');

    const montarPesquisa = () => {
        console.log('buscando...');
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
                            {dataBank.length ? dataBank.map((bank, i) => (
                                <Button key={i}>{bank.name}</Button>
                            )) : dataBank.name ? <Button>{dataBank.name}</Button> : <p>Código do banco não encontrado</p>}
                        </ButtonGroup>
                    </Box>
                </>
            </Secao>
        </>
    );
}

export default Listagem;

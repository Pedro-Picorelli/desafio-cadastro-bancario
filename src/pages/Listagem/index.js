import Titulo from 'components/Titulo';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import style from './Listagem.module.css';
import BotaoCadastro from 'components/BotaoAcao';
import Secao from 'components/Secao';
import Pesquisa from 'components/Pesquisa';
import { useCadastradoContext } from 'contextos/Cadastros';

function Listagem() {
    const {cadastrado, adicionarCadastro} = useCadastradoContext();
    return(
        <>
            <Titulo
                text="Escolha uma institução bancaria"
            />
            <Secao children={<Pesquisa /> }/>   
                  
        </>
    )
}

export default Listagem;
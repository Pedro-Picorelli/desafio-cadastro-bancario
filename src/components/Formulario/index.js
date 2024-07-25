import CampoTexto from 'components/CampoTexto';
import style from './Formulario.module.css';
import { useState } from 'react';
import Botao from 'components/Botao';
import { useCadastradoContext } from 'contextos/Cadastros';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function Formulario({banco}) {
    const [agencia, setAgencia] = useState('')
    const [contaBacaria, setContaBancaria] = useState('')

    const { cadastrado, adicionarCadastro } = useCadastradoContext();
    

    const aoSalvar = (evento) => {
        evento.preventDefault()
        // console.log(evento)
        adicionarCadastro({
            agencia,
            contaBacaria,
            banco
        })
        setContaBancaria('');
        setAgencia('');
    }
    return (
        <section className={style.formulario}>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do funcionario</h2>
                <TableContainer>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome</TableCell>
                                <TableCell align="right">ispd</TableCell>
                                <TableCell align="right">code</TableCell>
                                <TableCell align="right">Nome completo</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        {banco.name}
                                    </TableCell>
                                    <TableCell align="right">{banco.ispb}</TableCell>
                                    <TableCell align="right">{banco.code}</TableCell>
                                    <TableCell align="right">{banco.fullName}</TableCell>
                                </TableRow>
                            
                        </TableBody>
                    </Table>
                </TableContainer>
                <CampoTexto
                    obrigatorio={true}
                    label='Agencia'
                    placeholder='Informe a agencia'
                    valor={agencia}
                    aoAlterado={valor => setAgencia(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label='Conta de Cadastro'
                    placeholder='Informe a conta de cadastro'
                    valor={contaBacaria}
                    aoAlterado={valor => setContaBancaria(valor)}
                />
                <Botao
                    text="Cadastrar"
                />
            </form>
        </section>
    )
}

export default Formulario;
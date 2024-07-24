import { TextField } from '@mui/material';
import style from './Pesquisa.module.css'
import Botao from 'components/BotaoNav';
import { useCadastradoContext } from 'contextos/Cadastros';

function Pesquisa() {

    const {adicionarCadastro} = useCadastradoContext();

    return(
        <div className={style.div}>
            <TextField className={style.textFild}
                id="outlined-number"
                label="Codigo do banco"
                type="number"
            />
            <Botao func={adicionarCadastro} />
        </div>
    )
}

export default Pesquisa;
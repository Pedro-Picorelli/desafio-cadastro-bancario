import { TextField } from '@mui/material';
import style from './Pesquisa.module.css';
import Botao from 'components/Botao';

function Pesquisa({busca}) {    
    
    return(
        <div className={style.div}>
            <TextField className={style.textFild}
                id="outlined-number"
                label="Codigo do banco"
                type="number"
            />
            <Botao text="Pesquisar" />
        </div>
    )
}

export default Pesquisa;
import Titulo from 'components/Titulo';
import style from './Cadastro.module.css';
import Formulario from 'components/Formulario';
import { useBancoSelectContext } from 'contextos/BancoSelect';

function Cadastro() {
    const { banco } = useBancoSelectContext();
    return(
        <>
            <Titulo 
                text="Cadastre uma nova conta"
                mensagemBotao="Selecionar outro banco"
            />
            <Formulario banco={banco}/>
        </>
    )
}

export default Cadastro;
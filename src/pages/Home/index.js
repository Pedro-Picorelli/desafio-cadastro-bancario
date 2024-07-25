
import Secao from "components/Secao";
import CustomizedTables from "components/TabelaRegistros";
import style from './Home.module.css'
import Titulo from "components/Titulo";
import { useCadastradoContext } from "contextos/Cadastros";

function Home() {

    const { cadastrado } = useCadastradoContext();
    
    return (
        <>
            <Titulo
                text="Aqui você pode ver e cadastrar contas bancarias"
                mensagemBotao="Cadastre uma nova conta bancaria +"
            />
            <Secao children={cadastrado.length ?
                //  cadastrado.map((e) => <p>{e.agencia}</p>) 
                <CustomizedTables className={style.tab} cadastrado={cadastrado} />
                : 'Nenhuma conta cadastrada'} />
        </>
    )
}

export default Home;


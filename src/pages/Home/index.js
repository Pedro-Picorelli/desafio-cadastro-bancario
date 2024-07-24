import Secao from "components/Secao";
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
            <Secao children={cadastrado.length ? cadastrado.map((e) => <p>{e}</p>) : 'Nenhuma conta cadastrada'} />
        </>
    )
}

export default Home;
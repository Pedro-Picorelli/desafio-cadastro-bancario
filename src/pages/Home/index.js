import Botao from "components/Botao";
import { Link } from "react-router-dom";

function Home() {
    
    return (
        <>
            <Botao><Link to="./Listagem" />Cadastre uma nova conta bancaria +</Botao>
        </>
    )
}

export default Home;
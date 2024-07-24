import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Home from "pages/Home";
import Cadastro from "pages/Home/Cadastro";
import Listagem from "pages/Home/Listagem";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/Listagem" element={<Listagem />}></Route>
                    <Route path="/Cadastro" element={<Cadastro />}></Route>
                </Routes>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;
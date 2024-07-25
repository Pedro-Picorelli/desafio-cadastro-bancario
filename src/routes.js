import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Home from "pages/Home";
import Cadastro from "pages/Cadastro";
import Listagem from "pages/Listagem";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastradosProvider from "contextos/Cadastros";
import BancoSelectProvider from "contextos/BancoSelect";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <CadastradosProvider>
                <BancoSelectProvider>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/Listagem" element={<Listagem />}></Route>
                        <Route path="/Cadastro" element={<Cadastro />}></Route>
                    </Routes>
                </BancoSelectProvider>
            </CadastradosProvider>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;
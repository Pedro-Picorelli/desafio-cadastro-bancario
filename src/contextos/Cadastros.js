import { createContext, useContext, useState } from "react";

export const CadastradosContext = createContext();
CadastradosContext.displayName = "Cadastrados";

export default function CadastradosProvider({ children }) {
    const [cadastrado, setCadastrado] = useState([]);

    return (
        <CadastradosContext.Provider
            value={{ cadastrado, setCadastrado }}>
            {children}
        </CadastradosContext.Provider>
    )
}

export function useCadastradoContext() {
    const { cadastrado, setCadastrado } = useContext(CadastradosContext);
    
    function adicionarCadastro(novoCadastro) {
        
        let novaLista = [...cadastrado]
        novaLista.push(novoCadastro)
    
        setCadastrado(novaLista)

    }
    return {
        cadastrado,
        adicionarCadastro
    }
}
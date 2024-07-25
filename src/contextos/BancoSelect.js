import { createContext, useContext, useState } from "react";

export const BancoSelectContext = createContext();
BancoSelectContext.displayName = "Banco";

export default function BancoSelectProvider({ children}) {
    const [banco, setBanco] = useState({});

    return(
        <BancoSelectContext.Provider
            value={{ banco, setBanco }}>
                {children}
        </BancoSelectContext.Provider>
    )
}

export function useBancoSelectContext() {
    const {banco, setBanco} = useContext(BancoSelectContext);

    function selecionarBanco(bancoSelcionado) {
        // console.log(bancoSelcionado)
        let novoBanco = bancoSelcionado
        // console.log(novoBanco)
        setBanco(novoBanco)
    }
    return{
        banco,
        selecionarBanco
    }
}
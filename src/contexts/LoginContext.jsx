import { createContext, useState } from "react";

export const LoginContex = createContext(); // Nome correto

const LoginProvider = ({ children }) => {
    let initialUser = null;

    try {
        const storedUser = sessionStorage.getItem("usuario");
        if (storedUser) {
            initialUser = JSON.parse(storedUser);
        }
    } catch (error) {
        console.error("Erro ao recuperar usuário do sessionStorage:", error);
    }

    const [usuario, setUsuario] = useState(initialUser);

    return (
        <LoginContex.Provider value={{ usuario, setUsuario }}>
            {children}
        </LoginContex.Provider>
    );
};

export default LoginProvider;

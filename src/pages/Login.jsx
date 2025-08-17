import { UserOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import { useContext, useRef, useState } from "react";
import { LoginContex } from "../contexts/LoginContext";
import { useNavigate } from "react-router";
import './Login.css'; // Importa o arquivo de CSS

const { Option } = Select;

const Login = () => {
    const usuarioValue = useRef();
    const senhaValue = useRef();
    const [tipo, setTipo] = useState(null);
    const { setUsuario } = useContext(LoginContex);
    const navigate = useNavigate();

    async function login(event) {
        event.preventDefault(); // Previne o comportamento padrão do form (que recarrega a página)
        
        const usuario = usuarioValue.current.input.value;
        const senha = senhaValue.current.input.value;

        // Validação simples
        if (usuario === '') {
            alert("Digite o usuário");
            return;
        }
        if (senha === '') {
            alert("Digite a senha");
            return;
        }
        if (!tipo) {
            alert("Selecione um tipo");
            return;
        }

        try {
            const request = await fetch("https://projeto-arrais-api.onrender.com/usuario/login", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ usuario, senha, tipo })
            });

            const response = await request.json();

            if (response && response.usuario) { // Confirme se a resposta contém o objeto esperado
                setUsuario(response);
                sessionStorage.setItem("usuario", JSON.stringify(response));
                navigate('/');
            } else {
                alert("Login falhou. Verifique suas credenciais.");
            }
        } catch (error) {
            alert("Erro ao tentar fazer login. Tente novamente.");
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={login} className="login-form">
                <Input
                    ref={usuarioValue}
                    className="input-field"
                    placeholder="Digite seu usuário"
                    prefix={<UserOutlined className="input-icon" />}
                    required
                />
                <Input.Password
                    ref={senhaValue}
                    className="input-field"
                    placeholder="Digite sua senha"
                    required
                />
                {/* Campo de seleção do tipo */}
                <Select
                    className="select-field"
                    placeholder="Selecione o tipo"
                    onChange={(value) => setTipo(value)}
                >
                    <Option value="1">1 - Detalhes dos veículos</Option>
                    <Option value="4">4 - Extrato de Veículos</Option>
                </Select>
                
                <Button
                    type="primary"
                    className="submit-button"
                    htmlType="submit" // Usar o tipo "submit" para disparar o formulário
                >
                    Entrar
                </Button>
                <Button
                    type="default"
                    className="back-button"
                    href="/"
                >
                    Voltar
                </Button>
            </form>
        </div>
    );
}

export default Login;

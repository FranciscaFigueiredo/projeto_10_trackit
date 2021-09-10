import axios from "axios"
import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { postLogInto } from "../../service/trackIt";

import UserContext from "../contexts/UserContext";
import Button from "../shared/ ButtonActions";
import Input from "../shared/InputStyle";

export default function Login({ etName, setToken }) {
    const history = useHistory();
    const token = useContext(UserContext);
    if (token) {
        console.log(token)
    }
    

    const name = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [list, setList] = useState([]);

    function login() {
        const body = {
            email,
            password
        }
        console.log(body)
        postLogInto(body).then((res) => {
            setToken(res.data.token)
            history.push("/habitos")
            console.log(res.data.token)
        });
    }

    return (
        <Logar>
            <Logo src="../../../assets/logo.png" value={name} />
            <Input type="email" placeholder="email" value={email} onChange={(event) => (setEmail(event.target.value))} />
            <Input type="password" placeholder="senha" value={password} onChange={(event) => (setPassword(event.target.value))} />
            <Button type="submit" onClick={() => login()}>Entrar</Button>
            <Link to="/cadastro">
                Não tem uma conta? Cadastre-se!
            </Link>
        </Logar>
    );
}

const Logar = styled.div`
    width: 90vw;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin: 0 auto;
`

const Logo = styled.img`
    width: 60vw;
    
    margin: 50px auto;
`

const Redirect = styled.a`
    font-size: 13px;
    color: #52B6FF;
`

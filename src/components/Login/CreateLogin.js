import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import Button from "../shared/ ButtonActions";

import ButtonActions from "../shared/ ButtonActions";
import Input from "../shared/InputStyle";

export default function CreateLogin({ name, setName, setToken }) {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [name, setName] = useState("");
    const [image, setImage] = useState("");

    function createLogin() {
        const body = {
            email,
            password,
            name,
            image
        }

        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body).then()
    }

    return (
        <Logar>
            <Logo src="../../../assets/logo.png" value={name} />
            <Input type="email" placeholder="email" value={email} onChange={(event) => (setEmail(event.target.value))} />
            <Input type="password" placeholder="senha" value={password} onChange={(event) => (setPassword(event.target.value))} />
            <Input type="text" placeholder="nome" value={name} onChange={(event) => (setName(event.target.value))} />
            <Input type="text" placeholder="foto" value={image} onChange={(event) => (setImage(event.target.value))} />
            <Button onClick={() => createLogin()}>Entrar</Button>
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

import axios from "axios";
import { useContext, useState } from "react";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { postSubscription } from "../../service/trackIt";
import Button from "../shared/ButtonActions";

import ButtonActions from "../shared/ButtonActions";
import Input from "../shared/InputStyle";

export default function CreateLogin() {
    // { name, setName }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [nameButton, setNameButton] = useState("Cadastrar");

    const history = useHistory();

    console.log(name,
        image,
        email,
        password)
    function createLogin(event) {
        event.preventDefault();

        setNameButton(
        <Loader
            type="ThreeDots"
            color="#ffffff"
            height={40}
            width={60}
            timeout={3000} //3 secs
        />)

        const body = {
            name,
            image,
            email,
            password
        }
        console.log(body);
        const promise = postSubscription(body)
        promise.then((res) => {
            history.push("/")
        }).catch((err) => console.error)
    }

    return (
        <Logar>
            <Logo src="../../../assets/logo.png" />
            <Form onSubmit={createLogin}>
                <Input type="email" placeholder="email" required value={email} onChange={(event) => (setEmail(event.target.value))} />
                <Input type="password" placeholder="senha" required value={password} onChange={(event) => (setPassword(event.target.value))} />
                <Input type="text" placeholder="nome" required value={name} onChange={(event) => (setName(event.target.value))} />
                <Input type="url" placeholder="foto" required value={image} onChange={(event) => (setImage(event.target.value))} />
                <Button type="submit">{nameButton}</Button>
            </Form>
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

const Form = styled.form`
    text-align: center;
`

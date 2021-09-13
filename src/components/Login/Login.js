import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { getHabit, postLogInto } from "../../service/trackIt";

import UserContext from "../contexts/UserContext";
import Button from "../shared/ ButtonActions";
import Input from "../shared/InputStyle";

export default function Login({ setUser, setToken }) {
    const history = useHistory();
    const { token } = useContext(UserContext);
    if (token) {
        console.log(token)
    }
    

    // const name = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [list, setList] = useState([]);
    const body = {
        email,
        password
    }
    function login(event) {
        event.preventDefault();
        
        console.log(body)

        postLogInto(body).then((res) => {
            setToken(res.data.token)
            setUser({name: res.data.name,
                    image: res.data.image})
            history.push("/habitos")
            console.log(res.data.token)
            console.log(res.data)
        });
    }
    // if(token) {
    //     console.log(token)
    //     listHabit()
    // }
    // function listHabit() {
    //     const config = {
    //         headers: {
    //             "Authorization": `Bearer ${token}`
    //         }
    //     }
    //     const promise = getHabit(config)
    //     promise.then((res) => setList([...list, res])).catch((err) => console.error)
    // }
    // console.log(list)

    return (
        <Logar>
            <Form onSubmit={login}>
                <Logo src="../../../assets/logo.png" />
                <Input type="email" placeholder="email" value={email} onChange={(event) => (setEmail(event.target.value))} />
                <Input type="password" placeholder="senha" value={password} onChange={(event) => (setPassword(event.target.value))} />
                <Button type="submit">Entrar</Button>
            </Form>
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

    a {
        font-size: 13px;
        color: #52B6FF;
    }
`

const Logo = styled.img`
    width: 60vw;
    
    margin: 50px auto;
`

const Redirect = styled.a`
    font-size: 13px;
    color: #52B6FF;
`
const Form = styled.form`
    text-align: center;
`
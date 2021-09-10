import React, { useState } from "react";

import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import UserContext from "./contexts/UserContext";

import Habits from "./Habits/Habits";
import Header from "./Header";
import CreateLogin from "./Login/CreateLogin";
import Login from "./Login/Login";

export default function App() {
    // const params = useParams();
    // console.log(params)
    // const pageRoute = params
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null)

    return (
        <UserContext.Provider value={user} >
            <BrowserRouter>
                <Page>
                {/* <Header /> */}
                    <Container>
                        <Switch>
                            <Route path="/" exact>
                                <Login setName={setUser} setToken={setToken} />
                            </Route>
                            <Route path="/cadastro">
                                <CreateLogin name={user} setName={setUser} />
                            </Route>
                            {/* <Habits /> */}
                        </Switch>
                    </Container>
                </Page>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

const Page = styled.div`
  /* background-color: #f2f2f2; */
`

const Container = styled.div`
    width: 90vw;

    font-family: 'Lexend Deca', sans-serif;

    /* background-color: #F2F2F2; */

    /* display: flex;
    justify-content: space-between;
    align-items: center; */

    margin: 0 auto;
`

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #F2F2F2;
    }
`
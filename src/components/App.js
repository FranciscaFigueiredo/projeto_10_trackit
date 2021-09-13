import React, { useEffect, useState } from "react";

import { BrowserRouter, Route, Switch} from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

import HabitContext from "./contexts/HabitContext";
import UserContext from "./contexts/UserContext";

import Habits from "./Habits/Habits";
import Historic from "./Historic/Historic";
import CreateLogin from "./Login/CreateLogin";
import Login from "./Login/Login";
import Today from "./Today/Today";

export default function App() {
    // const params = useParams();
    // console.log(params)
    // const pageRoute = params
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [habits, setHabits] = useState([]);
    let [percentage, setPercentage] = useState(0);

    const screenHeight = window.screen.height
    console.log(screenHeight)

    const today = [
        {
            "id": 3,
            "name": "Dormir",
            "done": true,
            "currentSequence": 4,
            "highestSequence": 5
        },
        {
            "id": 2,
            "name": "Comer",
            "done": false,
            "currentSequence": 2,
            "highestSequence": 3
        },
        {
            "id": 4,
            "name": "Assistir",
            "done": false,
            "currentSequence": 7,
            "highestSequence": 8
        },
        {
            "id": 9,
            "name": "Assistir",
            "done": false,
            "currentSequence": 7,
            "highestSequence": 8
        }
    ]
    // useEffect(() => {
        // if(token) {
        //     console.log(token)
        //     listHabit()
        // }
    // }, [])
    
    useEffect(() => {
        setHabits(today)
    }, [])

    console.log(token)
    console.log(habits)

    return (
        <UserContext.Provider value={{user, token, habits, setHabits, percentage, setPercentage}} >
            <BrowserRouter>
                <Page token={token}>
                    <Container screenHeight={screenHeight} >
                        <Switch>
                            <Route path="/" exact>
                                <Login setUser={setUser} setToken={setToken} />
                            </Route>
                            <Route path="/cadastro">
                                <CreateLogin />
                            </Route>
                            <HabitContext.Provider value={habits, setHabits}>
                                <Route path="/habitos">
                                    <Habits />
                                </Route>
                                <Route path="/hoje">
                                    <Today />
                                </Route>
                                <Route path="/historico" >
                                    <Historic />
                                </Route>
                            </HabitContext.Provider>
                        </Switch>
                    </Container>
                </Page>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

const Page = styled.div`
  background-color: ${(props) => (props.token === null) ? "#ffffff" : "#f2f2f2"};
`

const Container = styled.div`
    width: 90vw;
    height: ${(props) => props.screenHeight > 0 ? `${props.screenHeight}px` : ""};

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
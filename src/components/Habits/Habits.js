import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { getHabit } from "../../service/trackIt";

import HabitContext from "../contexts/HabitContext";
import UserContext from "../contexts/UserContext";

import Footer from "../Footer";
import Header from "../Header";
import PageTitle from "../shared/PageTitle";
import CreateHabits from "./CreateHabits";
import ShowHabits from "./ShowHabits";

export default function Habits() {
    const {user, token} = useContext(UserContext)

    const [addHabit, setAddHabit] = useState(false);
    const [habits, setHabits] = useState([])
    console.log(token);

    // useEffect(() => {
        // if(token) {
        //     console.log(token)
        //     listHabit()
        // }
    // }, [])

    function listHabit() {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const promise = getHabit(config)
        promise.then((res) => setHabits([...habits, res.data])).catch((err) => console.error)
    }
    if(habits !== []) {
        console.log(habits)
    }

    function createHabit() {
        setAddHabit(true);
    }

    return (
        <>
            <Header />
            <PageTitle createHabit={createHabit} />
            
            <CreateHabits addHabit={addHabit} setAddHabit={setAddHabit} />
            {habits !== [] ?
                <ShowHabits listHabit={listHabit}  />
                : ""
            }
            
            <Paragraph>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Paragraph>
            <Footer />
        </>
    );
}

const Paragraph = styled.p`
    font-size: 18px;
    line-height: 22px;
    color: #666666;

    margin-top: 30px;
`
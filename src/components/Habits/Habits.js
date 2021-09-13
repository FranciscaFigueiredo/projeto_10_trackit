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
    let {user, token, habits, setHabits, percentage } = useContext(UserContext)
    // let [percentage, setPercentage] = useState(0)

    const [addHabit, setAddHabit] = useState(false);
    // const [habits, setHabits] = useState([])

    const data = [
        {
            id: 1,
            name: "Dormir",
            days: [1, 3, 5]
        },
        {
            id: 2,
            name: "Comer",
            days: [1, 3, 4, 6]
        }
    ]

    useEffect(() => {
        habits = data
    }, [])

    console.log(percentage);

    useEffect(() => {
        if(habits === []) {
            console.log(token)
            listHabit()
        }
    }, [])

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = getHabit(config)
        promise.then((res) => setHabits(res.data)).catch((err) => console.error)

    }, [])
    console.log(habits)

    function listHabit() {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const promise = getHabit(config)
        promise.then((res) => console.log(res.data)).catch((err) => console.error)
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
            <PageTitle createHabit={createHabit} pageTitle="Meus hábitos" percentage={percentage} />
            
            <CreateHabits addHabit={addHabit} setAddHabit={setAddHabit} />
            <HabitStyle confirm={true}>
                {habits !== [] ?
                    habits.map((hab) => <ShowHabits habit={hab}  />)                 
                    : <Paragraph>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Paragraph>
                }
            </HabitStyle>
            <Footer percentage={percentage} />
        </>
    );
}

const Paragraph = styled.p`
    font-size: 18px;
    line-height: 22px;
    color: #666666;

    margin-top: 30px;
`

const HabitStyle = styled.div`
    margin-bottom: 120px;
`
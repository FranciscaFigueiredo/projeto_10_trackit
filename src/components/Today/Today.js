import dayjs from "dayjs";
import 'dayjs/locale/pt-br'

import { useContext, useEffect } from "react";
import styled from "styled-components";

import HabitContext from "../contexts/HabitContext";
import UserContext from "../contexts/UserContext";

import Footer from "../Footer";
import Header from "../Header";
import PageTitle from "../shared/PageTitle";
import Habit from "./Habit";

export default function Today() {
    const { habits } = useContext(UserContext)

    let pageTitle = dayjs().locale('pt-br').format('dddd - DD-MM');

    let habit;
    
    console.log(habits)

    if(!habits.find((habit) => habit.done === true)) {
        habit = false;
    } else {
        habit = false;
    }
    
    
    return (
        <>
            <Header />
            <PageTitle habit={habit} pageTitle={pageTitle} />
            <Day>
                {habits.map((hab) => <Habit habit={hab} />)}
            </Day>
            <Footer />
        </>
    );
}

const Day = styled.div`
    margin-bottom: 120px;
`
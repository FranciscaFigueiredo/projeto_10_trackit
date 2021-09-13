import dayjs from "dayjs";
import 'dayjs/locale/pt-br'

import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { getTodayHabit } from "../../service/trackIt";

import HabitContext from "../contexts/HabitContext";
import UserContext from "../contexts/UserContext";

import Footer from "../Footer";
import Header from "../Header";
import PageTitle from "../shared/PageTitle";
import Habit from "./Habit";

export default function Today() {
    let { token, habits, percentage, setPercentage } = useContext(UserContext)
    const history = useHistory();

    let completed;
    // let [percentage, setPercentage] = useState(0);
    let [todayHabits, setTodayHabits] = useState([]);
    // let percentage = 0;

    let doneHabits = [];
    
    let pageTitle = dayjs().locale('pt-br').format('dddd, DD-MM');

    let habit;
    
    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = getTodayHabit(config)
        promise.then((res) => setTodayHabits(res.data)).catch((err) => console.error)

        if(habits.length === 0) {
            history.push("/habitos")
        }
    }, [])
    // console.log(todayHabits)

    if(todayHabits && todayHabits.find((habit) => habit.done === true)) {
        habit = true;
    } else {
        habit = false;
    }
    
    if(doneHabits !== []) {
        console.log(((100 * doneHabits.length) / habits.length))
        completed = (100 * doneHabits.length) / habits.length
        percentage = ((100 * doneHabits.length) / habits.length);
    }

    useEffect(() => {
        setPercentage(completed);
        console.log(percentage)
    }, [])

    
    
    return (
        <>
            <Header />
            <PageTitle habit={habit} pageTitle={pageTitle} percentage={percentage} />
            <Day>
                {todayHabits.map((hab) => <Habit key={hab.id} habit={hab} />)}
            </Day>
            <Footer percentage={percentage} />
        </>
    );
}

const Day = styled.div`
    margin-bottom: 120px;
`
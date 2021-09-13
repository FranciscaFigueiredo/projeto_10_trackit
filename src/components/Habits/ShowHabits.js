import { useContext, useEffect } from "react";

import styled from "styled-components";
import { Trash } from 'react-ionicons'

import HabitContext from "../contexts/HabitContext";
import UserContext from "../contexts/UserContext";
import DaysButton from "./DaysButton/DaysButton";

export default function ShowHabits({ habit }) {
    let { habits, setHabits } = useContext(UserContext)

    // console.log(habits)
    
    
    // useEffect(() => {
        if(habit !== []) {
            console.log(habit)
        }
    // if(habits !== []) {
    //     if(habits.find((hab) => hab.days.id === habit.days.id)) {
    //         color = true;
    //     }
    // }
    // }, [])
    const days = ["D", "S", "T", "Q", "Q", "S", "S"]
    return (
        <Show>
            <Definition>
                <HabitName>{habit.name}</HabitName>
                <Buttons>
                    {days.map((day, index) => (<DaysButton key={index} day={day} index={index} days={habit.days} />))}
                </Buttons>
            </Definition>
            <Trash
                color={'#666666'} 
                title={'title'}
                height="25px"
                width="25px"
                onClick={() => (habits = (habits.filter((hab) => hab !== habit)), console.log(habits))}
            />
        </Show>
    );
}

const Show = styled.div`
    width: 100%;
    height: 100px;

    background-color: #ffffff;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    box-sizing: border-box;

    padding: 10px;

    margin: 30px auto;
    position: relative;
`

const Definition = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`
const HabitName = styled.h2`
    width: 75vw;

    color: #666666;
    font-size: 20px;
    line-height: 22px;
    align-items: center;

    margin: 10px auto 0;
`

const Buttons = styled.div`
    width: 75vw;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    margin: 0 auto;
`
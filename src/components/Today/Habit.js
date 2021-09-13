import { useContext, useEffect } from "react";
import styled from "styled-components";
import HabitContext from "../contexts/HabitContext";
import { Checkbox } from 'react-ionicons'
import UserContext from "../contexts/UserContext";

export default function Habit({habit}) {
    const { habits } = useContext(UserContext)
    let checkColor;
    console.log(habits)

    if(habit.done === false) {
        checkColor = "#ebebeb";
    } else {
        checkColor = "#8fc549";
    }

    function check() {
        if(habit.done === false) {
            habit.done = true;
            console.log(checkColor)
            checkColor = "#8fc549"
            console.log(checkColor)
        } else {
            habit.done = false;
            console.log(checkColor)
            checkColor = "#ebebeb"
            console.log(checkColor)
        }
    }
    
    return (
        <ShowDay>
            <Definition>
                <HabitName>{habit.name}</HabitName>
                <P>Sequência atual: {habit.currentSequence} dias</P>
                <P>Seu recorde: {habit.highestSequence} dias</P>
            </Definition>
            <Checkbox
                color={`${checkColor}`} 
                title={"title"}
                height="100px"
                width="100px"
                onClick={() => check()}
            />
        </ShowDay>
    );
}

const ShowDay = styled.div`
    width: 100%;
    height: 100px;
    background-color: #ffffff;

    margin: 30px auto;
    
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
    
    position: relative;
`

const Definition = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const HabitName = styled.h2`
    width: 55vw;

    color: #666666;
    font-size: 20px;
    line-height: 22px;
    align-items: center;

    margin: 0 auto 10px;
`

const P = styled.p`
    width: 55vw;

    color: #666666;
    font-size: 12px;
    line-height: 18px;
    align-items: center;

    margin: 0 auto;
`

// const Checkbox = styled.div`
//     width: 60px;
//     height: 60px;

//     color: #8FC549;

// `
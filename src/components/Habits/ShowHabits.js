import styled from "styled-components";
import DaysButton from "./DaysButton/DaysButton";

export default function ShowHabits() {
    const days = ["D", "S", "T", "Q", "Q", "S", "S"]
    return (
        <Show>
            <Definition>
                <HabitName>Nome Exemplo</HabitName>
                <Buttons>
                    {days.map((day, index) => (<DaysButton key={index} day={day} index={index} />))}
                </Buttons>
            </Definition>
            <Trash></Trash>
        </Show>
    );
}

const Show = styled.div`
    width: 100%;
    background-color: #ffffff;
    margin-top: 30px;
    position: relative;
`

const Definition = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`
const HabitName = styled.h2`
    width: 80vw;
    height: 40px;

    color: #666666;
    font-size: 20px;

    margin: 0 auto;
`

const Buttons = styled.div`
    width: 81vw;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin: 0 auto;
`

const Trash = styled.span`
    position: absolute;
    top: 5px;
    right: 5px;
`
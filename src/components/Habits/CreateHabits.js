import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { postHabit } from "../../service/trackIt";
import HabitContext from "../contexts/HabitContext";
import UserContext from "../contexts/UserContext";
import Input from "../shared/InputStyle";
import DaysButton from "./DaysButton/DaysButton";

export default function CreateHabits({addHabit, setAddHabit}) {
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"]
    const {user, token} = useContext(UserContext)
    const {habits, setHabits} = useContext(HabitContext);
    console.log(user)
    const [habit, setHabit] = useState("");
    const [days, setDays] = useState([]);
    
    function selectDay(day) {
        if (!days.includes(day)) {
            setDays([...days, day]);
        }
    }

    function saveHabit() {
        const body = {
            name: habit,
            days: days
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        console.log(body, config);
        const promise = postHabit(body, config)
        promise.then((res) => (setHabits([...habits, res.data]), console.log(res))).catch((err) => console.error)
        console.log(habits);
        setHabit("");
        setDays([]);
        setAddHabit(false)
    }

    return (
        <>
            {
                addHabit === true ?
                    <Create>
                        <Definition>
                            <Input placeholder="nome do hábito" required value={habit} onChange={(event) => (setHabit(event.target.value))} ></Input>
                            <Buttons>
                                {weekdays.map((day, index) => (<DaysButton key={index} day={day} index={index} selectDay={selectDay} />))}
                            </Buttons>
                        </Definition>
                        <Actions>
                            <Action name="cancel" onClick={() => (setAddHabit(false))} >Cancelar</Action>
                            <Action name="save" onClick={() => {
                                {(habit !== "" && days.length > 0) ?
                                    saveHabit()
                                    : alert("Campos vazios")
                                }
                            }}>Salvar</Action>
                        </Actions>
                    </Create>
                : ""
            }
        </>
        
    );
}

const Create = styled.div`
    width: 100%;
    background-color: #ffffff;
    margin-top: 30px;
`

const Definition = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const HabitName = styled.input`
    width: 80vw;
    height: 40px;

    color: #666666;
    font-size: 20px;

    outline: 0;

    margin: 0 auto;

    border: 1px solid #d4d4d4;

    ::placeholder {
        color: #dbdbdb;
    }
`

const Buttons = styled.div`
    width: 81vw;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin: 0 auto;
`

const Actions = styled.div`
    width: 80vw;
    height: 40px;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin: 10px auto 0;
`

const Action = styled.button`
    width: 20vw;
    height: 35px;

    color: ${(props) => (props.name === "save" ? "#ffffff" : "#52b6ff" )};
    background-color: ${(props) => (props.name === "save" ? "#52b6ff" : "#ffffff" )};

    border: none;
    border-radius: 4.6px;
    margin-left: 5px;
`
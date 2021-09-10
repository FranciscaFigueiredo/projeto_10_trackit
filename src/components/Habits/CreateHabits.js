import styled from "styled-components";
import Input from "../shared/InputStyle";
import DaysButton from "./DaysButton/DaysButton";

export default function CreateHabits() {
    const days = ["D", "S", "T", "Q", "Q", "S", "S"]
    return (
        <Create>
            <Definition>
                <Input placeholder="nome do hábito" ></Input>
                <Buttons>
                    {days.map((day, index) => (<DaysButton key={index} day={day} index={index} />))}
                </Buttons>
            </Definition>
            <Actions>
                <Action name="cancel">Cancelar</Action>
                <Action name="save">Salvar</Action>
            </Actions>
        </Create>
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
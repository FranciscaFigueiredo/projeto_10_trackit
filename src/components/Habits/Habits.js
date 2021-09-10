import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import Footer from "../Footer";
import Header from "../Header";
import PageTitle from "../shared/PageTitle";
import CreateHabits from "./CreateHabits";
import ShowHabits from "./ShowHabits";

export default function Habits() {
    const user = useContext(UserContext)
    const [addHabit, setAddHabit] = useState(false);
    const [habits, setHabits] = useState([])
    console.log(user);
    
    useEffect(() => {
        
    }, [])

    function createHabit() {
        setAddHabit(true);
    }

    return (
        <>
            <Header />
            <PageTitle createHabit={createHabit} />
            {/* <ShowHabits /> */}
            <CreateHabits addHabit={addHabit} setAddHabit={setAddHabit} />
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
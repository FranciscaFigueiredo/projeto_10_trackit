import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import Footer from "../Footer";
import Header from "../Header";
import PageTitle from "../shared/PageTitle";
import CreateHabits from "./CreateHabits";
import ShowHabits from "./ShowHabits";

export default function Habits() {
    const user = useContext(UserContext)
    console.log(user)
    return (
        <>
            <Header />
            <PageTitle />
            {/* <ShowHabits /> */}
            <CreateHabits />
            <Paragrafo>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear! {user}</Paragrafo>
            <Footer />
        </>
    );
}

const Paragrafo = styled.p`
    font-size: 18px;
    line-height: 22px;
    color: #666666;

    margin-top: 30px;
`
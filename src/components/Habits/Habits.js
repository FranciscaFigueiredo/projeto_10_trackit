import styled from "styled-components";
import Footer from "../Footer";
import PageTitle from "../shared/PageTitle";
import CreateHabits from "./CreateHabits";
import ShowHabits from "./ShowHabits";

export default function Habits() {
    return (
        <>
            <PageTitle />
            {/* <ShowHabits /> */}
            <CreateHabits />
            <Paragrafo>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Paragrafo>
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
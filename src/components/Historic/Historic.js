import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";
import PageTitle from "../shared/PageTitle";

export default function Historic() {
    return (
        <>
            <Header />
            <PageTitle pageTitle="Histórico" />
            <Info>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </Info>
            <Footer/>
        </>
    );
}

const Info = styled.p`
    height: 100px;

    margin: 30px auto;
    font-size: 18px;
    color: #666666;
    line-height: 22px;
`
import styled from "styled-components";
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link, useHistory } from "react-router-dom";

export default function Footer({percentage}) {

    const history = useHistory();
    function redirect(route) {
        console.log(route)
        history.push(`${route}`)
    }
    // const percentage = 66;
    return (
        <FooterStyle>
            <FooterContent>
                <H4 onClick={() => redirect("/habitos")} >Hábitos</H4>

                <ProgressBar onClick={() => redirect("/hoje")}>
                    <CircularProgressbar
                        value={percentage}
                        text="Hoje"
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52b6ff",
                            textColor: "#ffffff",
                            pathColor: "#ffffff",
                            trailColor: "transparent"
                        })}
                    />
                </ProgressBar>
                <H4 onClick={() => redirect("/historico")}>Histórico</H4>
            </FooterContent>
        </FooterStyle>
        
    );
}

const FooterStyle = styled.footer`
    width: 100vw;
    height: 70px;
    background-color: #ffffff;

    position: fixed;
    bottom: 0;
    left: 0;

    z-index: 10;
`

const FooterContent = styled.div`
    width: 90vw;
    height: 70px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
    position: relative;

    a {
        text-decoration: none;
    }
`

const H4 = styled.h4`
    font-size: 18px;
    color: #52B6FF;
`

const ProgressBar = styled.div`
     width: 96px;
    height: 96px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 calc(50vw - 69.5px) 40px;

    overflow: visible;
    
    z-index: 100;
    position: absolute;
`

// const Day = styled.div`
//     width: 79px;
//     height: 79px;

//     color: red;
//     font-size: 18px;
    
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     background-color: #ffffff;
//     border-radius: 50%;
// `

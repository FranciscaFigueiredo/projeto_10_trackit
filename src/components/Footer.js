import styled from "styled-components";
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Footer() {
    return (
        <FooterStyle>
            <FooterContent>
                <H4>Hábitos</H4>
                
                <ProgressBar>
                    <Example label="">
                        <CircularProgressbar
                            value="33%"
                            text="Hoje"
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "#52b6ff",
                                textColor: "#fff",
                                pathColor: "#fff",
                                trailColor: "transparent"
                            })}
                        />
                    </Example>
                </ProgressBar>
                <H4>Histórico</H4>
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
`

const FooterContent = styled.div`
    width: 90vw;
    height: 70px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
    position: relative;
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

    margin: 0 calc(50vw - 69.5px);

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


function Example(props) {
    return (
        <>
            <div style={{ marginBottom: 60 }}>
            <div style={{ marginTop: 30, display: "flex" }}>
                <div style={{ width: "85px" }}>{props.children}</div>
            </div>
            </div>
        </>
    );
}
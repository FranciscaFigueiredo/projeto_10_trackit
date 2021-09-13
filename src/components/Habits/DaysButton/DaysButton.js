import { useState } from "react";
import styled from "styled-components";

export default function DaysButton({ day, index, disable, days, selectDay }) {
    let color = false;

    if(days && days.find((d) => d === index)) {
        color = true
    }

    return (
        <DaysStyle index={index} color={color} disable={disable} onClick={() => {
            selectDay(index);
        }} >{day}</DaysStyle>
    );
}

const DaysStyle = styled.button`
    width: 7vw;
    height: calc(7vw + 3px);

    color: #dbdbdb;
    font-size: 17px;

    margin: ${ (props) => (props.index === 0 ? "5px 3px 5px 0" : "5px 3px") };

    border-radius: 5px;
    border: 1px solid #d4d4d4;
    background-color: ${ (props) => (props.color === true ? "#d4d4d4" : "#ffffff") };
`
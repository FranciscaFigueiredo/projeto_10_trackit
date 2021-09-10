import styled from "styled-components";

export default function DaysButton({ day, index }) {
    return (
        <DaysStyle index={index} >{day}</DaysStyle>
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
    background-color: #ffffff;
`
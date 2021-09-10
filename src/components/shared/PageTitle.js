import styled from "styled-components";

export default function PageTitle({createHabit}) {
    return (
        <Top>
            <h2>Meus hábitos</h2>
            <AddHabit onClick={() => (createHabit())}>+</AddHabit>
        </Top>
    );
}

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 90px;

    h2 {
        font-size: 22px;
        line-height: 28px;
        color: #126ba5;
    }
`

const AddHabit = styled.button`
    width: 40px;
    height: 35px;

    font-size: 26px;
    color: #ffffff;

    border: none;
    border-radius: 4.5px;
    background-color: #52b6ff;
`
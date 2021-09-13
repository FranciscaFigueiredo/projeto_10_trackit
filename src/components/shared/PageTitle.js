import styled from "styled-components";

export default function PageTitle({createHabit, habit, pageTitle}) {
    let text = "";

    if(habit = false) {
        text = "Nenhum hábito concluído ainda"
    } else {
        text = "67% dos hábitos concluídos"
    }

    return (
        <Top>
            <Text>
                <h2>{pageTitle}</h2>
                <h4>{text}</h4>
            </Text>
            <AddHabit onClick={() => (createHabit())}>+</AddHabit>
        </Top>
    );
}

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 90px;
`

const Text = styled.div`

    h2 {
        font-size: 22px;
        line-height: 28px;
        color: #126ba5;
    }

    h4 {
        font-size: 18px;
        color: ${(props) => (props.habit === false) ? "#bababa" : "#8fc549"};
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
import styled from "styled-components";

export default function PageTitle({createHabit, habit, pageTitle, percentage}) {
    let text = "";
    let create = ""

    if(!percentage) {
        text = <h4>Nenhum hábito concluído ainda</h4>
    } else {
        text = <h4>{percentage}% dos hábitos concluídos`</h4>
    }

    if(!habit) {
        text = "";
    }

    if (pageTitle === "Meus hábitos") {
        create = <AddHabit onClick={() => (createHabit())}>+</AddHabit>
    }

    return (
        <Top>
            <Text habit={habit} >
                <h2>{pageTitle}</h2>
                {text}
            </Text>
            {create}
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
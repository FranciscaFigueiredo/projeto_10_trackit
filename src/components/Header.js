import styled from 'styled-components';

export default function Header() {
    return (
        <Navbar>
            <Top>
                <h1>TrackIt</h1>
                <Image />
            </Top>
        </Navbar>
    )
}

const Navbar = styled.header`
    width: 100vw;
    height: 70px;

    background-color: #126ba5;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 10;
`
const Top = styled.div`
    width: 90vw;
    height: 70px;

    font-family: 'Playball', cursive;
    font-size: 20px;
    color: #ffffff;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
`

const Image = styled.img`
    width: 51px;
    height: 51px;

    background-image: url("../../assets/profile.jpg");
    border-radius: 50px;
    box-sizing: content-box;
    object-fit: cover;
`
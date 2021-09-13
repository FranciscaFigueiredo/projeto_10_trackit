import { useContext } from 'react';
import styled from 'styled-components';
import UserContext from './contexts/UserContext';

export default function Header() {
    const {user, token} = useContext(UserContext);
    let image = "../../assets/profile.jpg";

    if(user) {
        image = user.image;
    }
    
    return (
        <Navbar>
            <Top>
                <h1>TrackIt</h1>
                <Image src={image} />
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


    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;

    h1 {
        font-family: 'Playball', cursive;
        font-size: 35px;
        color: #ffffff;
    }
`

const Image = styled.img`
    width: 51px;
    height: 51px;

    border-radius: 50px;
    box-sizing: content-box;
    object-fit: cover;
`
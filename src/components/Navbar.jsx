import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
`;

const Container = styled.div`
display:flex;
background-color:#55CEC7;
height:80px;
align-items:center;
justify-content:space-between;
width:100vw;
left:0;
`

const Left = styled.div`
color:white;
font-size:40px;
margin-left:70px;
font-family:'Lobster';
`

const Center = styled.div`
font-size:20px;
display:flex;
gap:40px;
`;

const Right = styled.div`
display: flex;
gap:20px;
margin-right:70px
`

const CustButton1 = styled.button`
background-color:white;
border:none;
border-radius:25px;
height:40px;
width:90px;
font-size:15px;
&:hover{
background-color:#55CEC7;
}
`

const CustomButton2 = styled.button`
background-color:black;
border:none;
border-radius:25px;
height:40px;
width:90px;
font-size:15px;
color:white;
&:hover{
background-color:#708090;
}
`

const CustomLink = styled('Link')`
color:white;
text-decoration:none;
`


const Navbar = () => {
    const navigate = useNavigate();
    const handleLoginOnclick = ()=>{
        navigate('/login')
    }

    const handleSignupClick = ()=>{
        navigate('/signup')
    }
  return (
    <Container>
      <Left>
        <Link to='/' style={{color:'white',textDecoration:'none'}}>PawPatrol</Link>
      </Left>
      <Center>
        <Link to='/findPet' style={{color:'white',textDecoration:'none'}}>Find a Pet</Link>
        <Link to='/predictor' style={{color:'white',textDecoration:'none'}}>Adoption Likeliness Predictor</Link>
      </Center>

      <Right>
        <CustButton1 onClick={handleLoginOnclick}>Login</CustButton1>
        <CustomButton2 onClick = {handleSignupClick}>Sign up</CustomButton2>
      </Right>
    </Container>
  )
}

export default Navbar

import styled from "styled-components";
// import { useNavigate } from "react-router";
import Image from "../assets/imageLogo.png";
import Image2 from "../assets/imageLogo.png";




const BigContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
`;

const Container = styled.div`
display:grid;
justify-content:center;
align-items:center;

display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  padding: 40px;
  box-sizing: border-box;
width:1255px;
`;

const Header = styled.header`
width:100%;
background-color:#11CCF5;
height:90px;
display:flex;
justify-content:center;
align-items:center;
position: fixed;
top: 0;
left: 0;
z-index: 1000;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);




`;


const TextContainer = styled.div`
margin-left:600px;
display:flex;
gap:25px;
`
;


const Text = styled.h1`
font-size:30px;
color:black;
cursor:pointer;


`;

const Text1 = styled.h1`
padding:auto;
// background-color:white;
margin-top:80px;
margin-right:110px;
font-size:30px;
color:white;
cursor:pointer;


`;

const Button = styled.button`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 280px;
  height: 70px;
  background-color: white;
  border-radius: 50px;
  color: black;
  font-size: 18px;
  transition: all 0.3s ease; /* silliq o'tish uchun */

  &:hover { 
    color: white;             
    transform: scale(1.05);   
  }
`;


const Text2 = styled.h1`
margin-top:110px;
margin-right:110px;
color:#11CCF5;
font-size:100px;
color:;



`;

const Text3 = styled.h1`
font-size:20px;
color:black;
cursor:pointer;



`;

const Text4 = styled.h1`
margin-top:300px;
// margin-right:110px;
color:#11CCF5;
font-size:100px;
color:;



`;


const Text5 = styled.h1`
margin-top:20px;
// margin-right:110px;
color:#11CCF5;
font-size:100px;
color:;



`;


const Text6 = styled.h1`
// margin-top:10px;
// margin-right:110px;
color:white;
font-size:30px;
color:;



`;




const Img = styled.img`
    margin-left:20px;
    padding:10px;
    width:50px;
    height:50px;
    border-radius:100%;

`


const Imaje = styled.img`
margin-top:200px;
width:600px;
height:600px;


`
;


const IContainer = styled.div`
display:flex;
`
;







const Home = () => {
//   const navigate = useNavigate("");
  return (
    <>
    
    <BigContainer>  
    <Container>
        
    <Header>
      <Img src={Image} alt=""/>
      <Text>
        Next Page
      </Text>
      
      
      <TextContainer>
      <Text>Our Socials</Text>
      <Text>Our Services</Text>
      </TextContainer>
    </Header>
    <Text1>
    <Text2>Programing 
     Developers
    </Text2>     
    <Button><Text3>Go to Our All Socials</Text3></Button> 
    </Text1>

    <IContainer>
    <Text4>About Our 
      <Text5>Company</Text5> 
      <Text6>
        <span>A team comprised of board certified</span>
        <br />
        <span>accountants, Manreka Accounting helps</span>
        <br />
       <span>you handle accounting problems in the </span> 
       <br />
       <span>most accessible and convenient way.</span> 
    </Text6>
    </Text4>

    <Imaje src={Image2} alt=""/>

    </IContainer>

    




    


    </Container>


    </BigContainer>

    </>
  );
};


export default Home;
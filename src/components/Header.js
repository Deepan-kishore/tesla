import React, {useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux'


function Header() {
const [show,setshow] = useState(false);
const cars = useSelector(selectCars);
// console.log(cars);

return (
    <Container>
      <a href="index.html">
        <img src='/images/logo.svg' alt='logo'  />
      </a>
      <Menu>
{cars.map((car,index)=>(
        <a key={index} href='index.html'>  {car}</a> 

))}
       
      </Menu>
      <RightMenu>
<a href='t' >Shop</a>
<a href='t' >Tesla Account</a>
<CustomMenu onClick={()=>(setshow(!show))} />
      </RightMenu>

      <Burger show={show}  >
        <CLoseW onClick={()=>(setshow(!show))} > <CloseIcon /></CLoseW>
        {cars.map((car,index)=>(
        <li key={index}> <a href='i'> {car} </a> </li>

))}
        <li> <a href='i'> Used </a> </li>
        <li> <a href='i'> Trade-In </a> </li>
        <li> <a href='i'> CyberTruck </a> </li>
        </Burger>
      
    </Container>
    )
}

export default Header
const Container =  styled.div`
min-height: 60px;
top:0;
left:0;
right:0;
position: fixed;
display:flex;
align-items: center;
justify-content: space-between; 
padding: 0 20px; 
z-index:1;
 
`;
const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
a{
  font-weight:400;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap:nowrap;
}
@media(max-width: 750px){
  a{
    display: none;
  }
}

`;
const RightMenu = styled.div`
display:flex;
align-items:center;
a{
  font-weight:400;
  text-transform: uppercase;
  margin-right:10px;
}`;
const CustomMenu = styled(MenuIcon)`
cursor: pointer;
`;


const Burger = styled.div`
 position: fixed;
 top:0;
 bottom:0;
 right:0;
 background-color:white;
 width: 300px;
 transform:  ${props => props.show?"translateX(0);":"translateX(100%);"}
 transition: transform 0.5s;
 z-index:16;
 list-style:none;
 padding:20px;
 display:flex;
 flex-direction:column;
 text-align:start;
 li{
  padding: 15px 0;
  border-bottom: 1px solid #00000033;
 }
 @media(max-width: 756px){
  width : 100vw;
 }
`;

const CLoseW = styled.div`
display: flex;
justify-items: end;
cursor:pointer;

`;
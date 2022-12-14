import React from 'react'
import styled from 'styled-components'

function Section( {title,description,background,leftBtn} ) {
    console.log(title);
    return (
    
    <Wrap background1= {background} >
        <ItemText>
            <h1>
                {title}
            </h1>
            <p> {description} </p>
        </ItemText>
<Button>
<ButtonGroup>
            <LeftButton>
                {leftBtn}
            </LeftButton>
            <RightButton>
            Existing Inventory
            </RightButton>
        </ButtonGroup>
        <DownArrow style={{opacity:1}} src="/images/down-arrow.svg"  /> 
</Button>
        
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
z-index:-1;
width : 100vw;
height: 100vh;
background-size:cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between; //vertical alignment due to flex direction
align-items: center;
background-image: ${props => `url("/images/${props.background1}")`}
`;

const ItemText = styled.div`
padding-top: 15vh;
text-align:center;
`;
const ButtonGroup = styled.div`
display:flex;
margin-bottom: 30px;
@media (max-width: 768px){
    flex-direction:column;
}

`;
const LeftButton = styled.div`
background-color: grey;
height:40px;
width:256px;
color: white;
display:flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 17px;
cursor: pointer;
margin:8px;
`;
const RightButton = styled(LeftButton)`
background:white;
color:black;
opacity:0.8;
`;

const DownArrow = styled.img`
overflow-x: hidden;
height:40px;
animation: animateDown infinite 2s;
`;
const Button = styled.div``;
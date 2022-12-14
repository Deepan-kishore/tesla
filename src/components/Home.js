import React from 'react'
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
<Container>
<Section 
        title="Model S"
        description="Order Online for Touchless Delivery"
        background = "model-s.jpg"
        leftBtn="Custom order" />
        <Section 
        title="Model Y"
        description="Order Online for Touchless Delivery"
        background = "model-y.jpg"
        leftBtn="Custom order" />
        <Section 
        title="Model X"
        description="Order Online for Touchless Delivery"
        background = "model-x.jpg"
        leftBtn="Custom order" />
        
        <Section 
        title=" Lowest Cost Solar Panels in America"
        description="Money-back Guarentee"
        background = "solar-panel.jpg"
        leftBtn="Order Now" />

<Section 
        title=" Solarfor new Roofs"
        description="Money-back Guarentee"
        background = "solar-roof.jpg"
        leftBtn="Order Now" />
        
      </Container>  )
}

export default Home

const Container = styled.div`
color:yellow;height:200px;
`
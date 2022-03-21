import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="Model s"
                descrition="Order Online FOr Touchless Delievery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model Y"
                descrition="Order Online FOr Touchless Delievery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"

            />
            <Section
                title="Model 3"
                descrition="Order Online FOr Touchless Delievery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                
            />
            <Section
                title="Model X"
                descrition="Order Online FOr Touchless Delievery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Lowest Solar Panels In Mini-Punjab"
                descrition="Money_back Gurantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText=" Learn More"

            />
            <Section
                title="Solar For Roofs"
                descrition="Solar Panels  Less Than New Solar Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText=" Learn More"

            />
            <Section
                title="Accessories"
                descrition=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now"


            />
        </Container>
    )
}
const Container = styled.div`
    height:100vh;
`
export default Home

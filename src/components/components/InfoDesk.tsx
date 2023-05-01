import React from 'react'
import styled from 'styled-components'
import ice from "../../assets/ice.jpg"

interface iData {
    src: string;
    title: string;
    rr: string;
}

const InfoDesk: React.FC<iData> = ({ src, title, rr }) => {
    return (
        <div>
            <Container>
                <Main rr={rr} >
                    <Image src={src} />
                    <Info>{title}</Info>

                </Main>

            </Container>
        </div>
    )
}

export default InfoDesk

const Info = styled.div`
width: 450px;
height: 300px;
border-radius: 10px;
margin: 10px;
display: flex;
align-items: center;
text-align: center;
font-size: 23px;
font-weight: 600;
`

const Image = styled.img`
height: 350px;
background-color: pink;
border-radius: 10px;
margin: 10px;

`

const Main = styled.div<{
    rr: string
}>`
width: 80%;
height: 100%;
justify-content: center;
display:flex;
flex-direction: ${({ rr }) => rr ? "row-reverse" : "row"};
flex-wrap: wrap;
align-items: center;
padding: 10px 0;
`

const Container = styled.div`
width: 100%;
min-height: 400px;
justify-content: center;
display:flex;
align-items: center;

`
import { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"
import pix from "../assets/ice.jpg"
import vid from "../assets/vid.mp4"

const Text = () => {
    const [toggle, setToggle] = useState<boolean>(false)

    const onToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div>
            <Button>Switch</Button>
            <Container data='dark' props>
                <Main>
                    <Hover>
                        <Image>
                            <Video src={vid} autoPlay loop playsInline />
                            <Img src={pix} />
                        </Image>
                    </Hover>


                    <Nav to="/test">
                        <span>Hover</span>
                    </Nav>
                </Main>
            </Container>
        </div>
    )
}

export default Text



const Img = styled.img`
width:100%;
height:100%;
position: absolute;
top:0;
left:0;
`

const Video = styled.video`
width:100%;
height:100%;
object-fit: cover;
position: absolute;
top:0;
left:0;
z-index: 10;
opacity:0;
transition: all 550ms;

:hover{
   opacity:1;
}

`

const Nav = styled(NavLink)`
margin: 10px;
position: relative;
width:50px;
  transition: all 300ms;
text-decoration: none;
color: black;


::after{
    content: "";
    position: absolute;
    height: 4px;
    width: 100%;
    background-color: darkorange;
    top:20px;
    left:0;
    opacity: 0;
    transition: all 300ms;
    transform: scale(0);
    transform-origin:  left center ;

 
}

   
&.active{
    
::after{
    content: "";
    position: absolute;
    height: 4px;
    width: 100%;
    background-color: darkorange;
    top:20px;
    left:0;
    opacity: 1;
    transition: all 300ms;
    transform: scale(1);
    transform-origin:  left center ;

 
}
}

span{
    font-weight: 600


}

:hover {
  
        cursor: pointer;
        ::after{
            opacity: 1;
            transform: scale(1);
       
    }
}
`


const Image = styled.div`
width: 200px;
height: 200px;
background-color: teal;
transition: all 300ms;
z-index: 1;
position: relative;
`

const Hover = styled.div`
width: 200px;
height: 200px;
background-color: black;
position: relative;
display: block;


::before,
::after{
     content: "";
     position: absolute;
     display: inline-block;
     transition: all 300ms;
     background-color: black;
     width:10px;
     height: 10px;
}

::before{
    top:0;
    left: 0;
    transform-origin: top left;
    transform: rotate(45deg) scale(0);
}

::after{
    bottom:0;
    right: 0;
    transform-origin: bottom right;
    transform: rotate(45deg) scale(0);
}

:hover ${Image}{
    transform: translate(8px, -8px);
}

:hover::before{
    transform: rotate(-45deg) scale(1);
}

:hover::after{
    transform: rotate(45deg) scale(1);
}
`

const Button = styled.div`
height: 50px;
margin: 30px;
border-radius: 3px;
border: 1px solid darkorange;
width: 150px;
display: flex;
justify-content: center;
align-items: center;
transition: all 300ms;

:hover{
    cursor: pointer;
    transform: scale(1.02);
}

`

const Main = styled.div`
margin: 20px;
`

const Container = styled.div<{ props: any, data: string }>`
width: 90%;
height: 50vh;
border: 1px solid silver;
margin: 20px;
border-radius: 10px;
background-color: ${(props) => `${props.theme.light.primary}`};
`

const Container2 = styled.div<{ props: any, data: string }>`
width: 90%;
height: 50vh;
border: 1px solid silver;
margin: 20px;
border-radius: 10px;
background-color: ${(props) => `${props.theme.dark.primary}`};
`
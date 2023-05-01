import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Container>
            <Main>
                <MenuSets>
                    <FooterHead>CodeLab</FooterHead>
                    <FooterItems> Has 1000 of Developer  </FooterItems>

                </MenuSets>
                <MenuSets>
                    <FooterHead>CodeLab Sets</FooterHead>
                    <FooterItems>Set 01 </FooterItems>
                    <FooterItems>Set 02 </FooterItems>
                    <FooterItems>Set 03 </FooterItems>
                    <FooterItems>Set 04 </FooterItems>
                    <FooterItems>Set 05 </FooterItems>
                    <FooterItems>Set 06 </FooterItems>
                    <FooterItems>Set 07 </FooterItems>
                </MenuSets>
                <MenuSets>
                    <FooterHead>BroCode</FooterHead>
                    <FooterItems>Umegakwe Gabriel  </FooterItems>
                    <FooterItems>Williams Daniel  </FooterItems>
                    <FooterItems>Akinola Joshua  </FooterItems>
                    <FooterItems>Richard Emmanuel </FooterItems>
                    <FooterItems>Austin Uchenna  </FooterItems>
                    <FooterItems>Umegakwe Gabriel  </FooterItems>
                    <FooterItems>Umegakwe Gabriel  </FooterItems>

                </MenuSets>
                <MenuSets>
                    <FooterHead>SheCode</FooterHead>
                    <FooterItems> Amidat </FooterItems>
                    <FooterItems> Destiny </FooterItems>
                    <FooterItems> Blessing </FooterItems>
                    <FooterItems> Jemima </FooterItems>
                    <FooterItems> Dera </FooterItems>
                    <FooterItems> Ola </FooterItems>

                </MenuSets>

                <MenuSets>
                    <FooterHead>Fellows</FooterHead>
                    <FooterItems>Fellow Dickson </FooterItems>
                    <FooterItems>Fellow Fred </FooterItems>
                    <FooterItems>Fellow Olorunda </FooterItems>
                    <FooterItems>Fellow Gideon </FooterItems>
                    <FooterItems>Fellow Sams </FooterItems>
                    <FooterItems>Fellow Goodluck </FooterItems>
                    <FooterItems>Fellow Mich </FooterItems>

                </MenuSets>





            </Main>
            <Text>All rights reserved </Text>
            <Text>Facebook   Whatsapp   Twitter   Instagram </Text>
        </Container>
    )
}

export default Footer
const Text = styled.div`
font-size: 15px;
font-weight: 600;
`;
const FooterHead = styled.div`
font-weight: 600;
font-size: 20px;
`;
const FooterItems = styled.div`
font-size: 15px;
margin-top:5px;

`

const MenuSets = styled.div`
height: 200px;
width: 250px;
/* background-color: black; */
margin: 20px 30px;

`
const Main = styled.div`
margin: 50px 0px;
min-height: 200px;
background-color:white;
width: 80%;
display: flex
`
const Container = styled.div`
min-height: 200px;
background-color: pink;
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
`
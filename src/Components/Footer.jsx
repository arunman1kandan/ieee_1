<<<<<<< HEAD
import React from "react";
import styled from "styled-components";
import {ImFacebook2 , ImTwitter} from "react-icons/im"
import {AiFillInstagram, AiFillYoutube} from "react-icons/ai"

function Footer() {
  return (
    <Box id="footer">
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#visionmission">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>

          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
            <ImFacebook2 style={{"scale" : "1.5"}}/>
            </FooterLink>
            <FooterLink href="https://instagram.com/sit_ieee?igshid=YmMyMTA2M2Y=" target="_blank">
              <AiFillInstagram style={{"scale" : "2"}}/>
            </FooterLink>
            <FooterLink href="https://www.youtube.com/channel/UC19Rjp76WO0XI5tnAuFVOgg" target="_blank">
              <AiFillYoutube style={{"scale" : "2"}}/>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
}

const Box = styled.div`
  background: #005f94;
  width: 99.2vw;
  padding: 70px 30px;
  border-radius: 20px 20px 0 0;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
  }
`;

const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
`;

const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
`;
export default Footer;
=======
import React from "react";
import styled from "styled-components";
import {ImFacebook2 , ImTwitter} from "react-icons/im"
import {AiFillInstagram, AiFillYoutube} from "react-icons/ai"

function Footer() {
  return (
    <Box id="footer">
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#visionmission">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>

          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
            <ImFacebook2 style={{"scale" : "1.5"}}/>
            </FooterLink>
            <FooterLink href="https://instagram.com/sit_ieee?igshid=YmMyMTA2M2Y=" target="_blank">
              <AiFillInstagram style={{"scale" : "2"}}/>
            </FooterLink>
            <FooterLink href="https://www.youtube.com/channel/UC19Rjp76WO0XI5tnAuFVOgg" target="_blank">
              <AiFillYoutube style={{"scale" : "2"}}/>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
}

const Box = styled.div`
  background: #005f94;
  width: 99.2vw;
  padding: 70px 30px;
  border-radius: 20px 20px 0 0;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
  }
`;

const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
`;

const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
`;
export default Footer;
>>>>>>> 9212bdaabe56751ef231df7edcf22b652fef73cc

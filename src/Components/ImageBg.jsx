
import React from "react";
import styled from "styled-components";
function ImageBg() {
  return (
    <div>
      <ImageContainer>
        <BackgroundImg src="https://lh3.googleusercontent.com/drive-viewer/AJc5JmRLkE_7u2HAwHZhrQ6Ij7jgtvHvE6V8LSocioVo8HE-jr9Ja20tpsjE3KcmPzEbzOiZtbq5MCc=w1868-h952"  alt="bg-img" />
        <BlackLayer></BlackLayer>
        <IEEELogo src="https://lh3.googleusercontent.com/drive-viewer/AJc5JmQbTnBx450jC8GsQ26HiropbMc0t3vjupTBJoVbQu5p_k3oOtCGqwqzrWxp0zJu_yNIX2FbSOo=w1868-h952" alt="ieee-logo" />
        <LogoTextContainer>
          <LogoText>Student chapter</LogoText>
          <Seperator></Seperator>
          <CollageTextLogo>
            <CollageText>SRI SAI RAM INSTITUTE OF TECHNOLOGY</CollageText>
            <Seperator></Seperator>
            <CollageMotto>INSPIRE... INNOVATE... INVENT...</CollageMotto>
          </CollageTextLogo>
        </LogoTextContainer>
      </ImageContainer>
    </div>
  );
}

export default ImageBg;

const ImageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;
const BackgroundImg = styled.img`
  width: 100vw;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  background: rgba(255, 255, 255, 0.25);
`;

const BlackLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

const IEEELogo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 130px;
  object-fit: contain;
  z-index: 1;

  @media (min-width: 1024px) {
    top: 40%;
  }
`;

const LogoTextContainer = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 130px;
  z-index: 1;
  width: 80%;
`;
const LogoText = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: white;
  text-align: center;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 15px;
  margin-bottom: 30px;
`;

const Seperator = styled.div`
  width: 60%;
  height: 1px;
  background: white;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20%;
`;

const CollageTextLogo = styled.div``;

const CollageText = styled.p`
  font-size: 32px;
  font-weight: 900;
  color: white;
  text-align: center;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.2rem;
`;

const CollageMotto = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: white;
  text-align: center;
  margin: 10px 0;
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  letter-spacing: 3px;
`;

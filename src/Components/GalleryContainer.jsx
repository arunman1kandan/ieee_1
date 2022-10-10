
import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function GalleryContainer() {
  return (
    <>
    <GalleryTag id="gallery"/>
    <GalleryCover>
      <GalleryText>Gallery</GalleryText>
      <GalleryCarousaul>
        <Carousel
          autoPlay
          adaptiveHeight={true}
          showStatus
          showIndicators
          className="carousel"
          infiniteLoop
          showThumbs={false}
        >
          <EventposterContainer>
            <EventPoster
              src="https://lh3.googleusercontent.com/drive-viewer/AJc5JmQXX9LCoaTqL9tCZQf-TuSy692YhTyCT80HAFaMM0roR5OvBjsGnB-uzh_jtHQa-PV7OEI36f4=w1868-h952"
              alt="carousaul"
            />
          </EventposterContainer>
          <EventposterContainer>
            <EventPoster
              src="https://lh3.googleusercontent.com/drive-viewer/AJc5JmREMK9v6ux4hbWZ7ahTH55qDCvulHrOCD2ELlTCpEOaWmD09xC_kQWlcVzgrtRbYg-f-C2XHnk=w1868-h952"
              alt="carousaul"
            />
          </EventposterContainer>
          <EventposterContainer>
            <EventPoster
              src="https://lh3.googleusercontent.com/drive-viewer/AJc5JmS46fZAxzm8EKkEkVzFoq02bdCy8Pkzv9kXMlB7xr_VnAKLr4UeWSTBU4eshj2LT4IvAqYeW2o=w1868-h952"
              alt="carousaul"
            />
          </EventposterContainer>
          <EventposterContainer>
            <EventPoster
              src="https://lh3.googleusercontent.com/drive-viewer/AJc5JmR-6H9GVcStWm7QAdcyDm9IMTGZ-wm--IfwZ6Ws8IvxwqMHsZTHt7-dwR0Q_SemnWS4qRgYqSk=w1868-h952"
              alt="carousaul"
            />
          </EventposterContainer>
          <EventposterContainer>
            <EventPoster
              src="https://lh3.googleusercontent.com/drive-viewer/AJc5JmSDYe-2mkUCni8G2gaqKLZ01hYOPVZGwB7c_bRz_5ARSiD1IPcu6oy8E0lGvxYK5ZgqmnMh-2g=w1868-h952"
              alt="carousaul"
            />
          </EventposterContainer>
        </Carousel>
      </GalleryCarousaul>
    </GalleryCover>
    </>
  );
}

export default GalleryContainer;

const GalleryTag = styled.div``

const GalleryCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top:5rem;
  z-index:-1;
  overflow:hidden;
`;

const GalleryText = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  color: #005f94;
  letter-spacing: 2px;
`;

const GalleryCarousaul = styled.div`
  width: 80%;
  height: 600px;
  margin-top: 20px;

  .carousel {
    width: 100%;
    height: 100%;
  }
`;

const EventposterContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const EventPoster = styled.img`
  width: 100%;
  height: 100%;
`;

const EventText = styled.p``;

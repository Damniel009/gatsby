import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ImageWithZoom,
  Image,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CustomSlide from "./slide";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import "./style.scss";

const slideArrays = [
  {
    header: "Maximális komfortérzet, minimális energiafogyasztás!",
    text: "Padló- és mennyezetfűtési / -hűtési megoldások, professzionális kivitelezésben, garanciával",
  },
  {
    header: "Tudta, hogy rezsiköltsége lehet akár 0 Ft is?",
    text: "Ha szeretné csökkenteni fűtésszámláját, hívja a Hőszivattyú-Gépész Kft.-t!",
  },
  {
    header: "Hővisszanyerős szellőzés: megoldás allergia ellen!",
    text: "Teljeskörű beltéri megoldások a tisztított, pollenmentes levegő érdekében!",
  },
  {
    header: "Környezetbarát hőenergia az Ön otthonában is!",
    text: "Minőségi megoldásokat kínálunk hosszú távra, több éves szakmai tapasztalattal.",
  },
];

export default function Carousel() {
  return (
    <div className="d-flex justify-content-center h-25">
      <CarouselProvider
        visibleSlides={1}
        totalSlides={slideArrays.length}
        naturalSlideWidth={200}
        naturalSlideHeight={70}
        isIntrinsicHeight={true}
        infinite={true}
        isPlaying={false}
      >
        <div className="d-flex">
          <ButtonBack>
            <ArrowBackIcon className="carousel_navigation_button" />
          </ButtonBack>
          <Slider>
            {slideArrays.map((slide, index) => (
              <CustomSlide
                key={index}
                index={index}
                header={slide.header}
                text={slide.text}
              />
            ))}
          </Slider>
          <ButtonNext>
            <ArrowForwardIcon className="carousel_navigation_button" />
          </ButtonNext>
        </div>
        <DotGroup className="mt-2" disableActiveDots />
      </CarouselProvider>
    </div>
  );
}

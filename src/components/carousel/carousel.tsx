import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ImageWithZoom,
  Image,
  ButtonFirst,
  ButtonPlay,
  ButtonLast,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CustomSlide from "./slide";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import "./style.scss";

export default function Carousel() {
  return (
    <div className="d-flex justify-content-center h-25">
      <CarouselProvider
        visibleSlides={1}
        totalSlides={4}
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
          <Slider className="mockSlider">
            <Slide className="mockSlide" index={0}>
              <h4>Maximális komfortérzet, minimális energiafogyasztás!</h4>
              <div>
                Padló- és mennyezetfűtési / -hűtési megoldások, professzionális
                kivitelezésben, garanciával.
              </div>
            </Slide>
            <Slide className="mockSlide" index={1}>
              <h4>Tudta, hogy rezsiköltsége lehet akár 0 Ft is?</h4>
              <div>
                Ha szeretné csökkenteni fűtésszámláját, hívja a
                Hőszivattyú-Gépész Kft.-t!
              </div>
            </Slide>
            <Slide className="mockSlide" index={2}>
              <h4>Hővisszanyerős szellőzés: megoldás allergia ellen!</h4>
              <div>
                Teljeskörű beltéri megoldások a tisztított, pollenmentes levegő
                érdekében!
              </div>
            </Slide>
            <Slide className="mockSlide" index={0}>
              <h4>Környezetbarát hőenergia az Ön otthonában is!</h4>
              <div>
                Minőségi megoldásokat kínálunk hosszú távra, több éves szakmai
                tapasztalattal.
              </div>
            </Slide>
          </Slider>
          <ButtonNext>
            <ArrowForwardIcon className="carousel_navigation_button" />
          </ButtonNext>
        </div>
        <DotGroup className="mt-2" dotNumbers disableActiveDots />
      </CarouselProvider>
    </div>
  );
}

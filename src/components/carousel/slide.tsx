import React, { useState } from "react";
import {
  Slider,
  Slide,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function CustomSlide() {
  return (
    <Slider>
      <div
        id="slider"
        className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
      >
        <Slide index={0}>
          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
            <img
              src="https://i.ibb.co/fDngH9G/carosel-1.png"
              alt="black chair and white table"
              className="object-cover object-center w-full"
            />
            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                Catalog 1
              </h2>
              <div className="flex h-full items-end pb-6">
                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                  Minimal Interior
                </h3>
              </div>
            </div>
          </div>
        </Slide>
        <Slide index={1}>
          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
            <img
              src="https://i.ibb.co/DWrGxX6/carosel-2.png"
              alt="sitting area"
              className="object-cover object-center w-full"
            />
            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                Catalog 2
              </h2>
              <div className="flex h-full items-end pb-6">
                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                  Minimal Interior
                </h3>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </Slider>
  );
}

import React, { useState } from "react";
import { Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./style.scss";

interface SlideProps {
  index: number;
  header: string;
  text: string;
}

const CustomSlide: React.FC<SlideProps> = ({ index, header, text }) => {
  return (
    <Slide className="slide" index={index}>
      <div className="slideContent">
        <h4>{header}</h4>
        <div>{text}</div>
      </div>
    </Slide>
  );
};

export default CustomSlide;

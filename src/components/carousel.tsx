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

function eventLogger(ev) {
  // eslint-disable-next-line no-console
  console.log(ev.type, ev.target);
}

export default function Carousel() {
  const [slide, setSlide] = useState(0);
  return (
    <div className="container h-25">
      <CarouselProvider
        visibleSlides={1}
        totalSlides={4}
        naturalSlideWidth={200}
        naturalSlideHeight={70}
        isIntrinsicHeight={true}
        infinite={true}
        isPlaying={true}
      >
        <div className="d-flex">
          <ButtonBack>
            <ArrowBackIcon />
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
          {/* <ButtonFirst>First</ButtonFirst> */}
          <ButtonNext>
            <ArrowForwardIcon />
          </ButtonNext>
        </div>
        {/* <ButtonLast>Last</ButtonLast> */}
        <DotGroup dotNumbers disableActiveDots />
      </CarouselProvider>
    </div>

    // <React.Fragment>
    //   <div>
    //     <label htmlFor="currentSlideEx9">
    //       Test switching the default starting slide (currentSlide prop).
    //     </label>
    //     <select id="currentSlideEx9" onChange={ev => setSlide(Number(ev.target.value))}>
    //       <option value="0" defaultValue={slide === 0}>
    //         0
    //       </option>
    //       <option value="1" defaultValue={slide === 1}>
    //         1
    //       </option>
    //       <option value="2" defaultValue={slide === 2}>
    //         2
    //       </option>
    //       <option value="3" defaultValue={slide === 3}>
    //         3
    //       </option>
    //       <option value="4" defaultValue={slide === 4}>
    //         4
    //       </option>
    //       <option value="5" defaultValue={slide === 5}>
    //         5
    //       </option>
    //     </select>
    //   </div>
    //   <CarouselProvider
    //     visibleSlides={1}
    //     totalSlides={6}
    //     step={2}
    //     naturalSlideWidth={400}
    //     naturalSlideHeight={500}
    //     hasMasterSpinner
    //     currentSlide={slide}
    //     isPlaying
    //   >
    //     <h2 className={s.headline}>Horizontal Carousel Auto Play</h2>
    //     <Slider className={s.slider}>
    //       <Slide index={0}>
    //         <Image height="100px"  width="100px" src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" />
    //       </Slide>
    //       <Slide index={1}>
    //         <Image height="100px"  width="100px" src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" />
    //       </Slide>
    //       <Slide index={2}>
    //         <Image height="100px"  width="100px" src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" />
    //       </Slide>
    //       <Slide index={3}>
    //         <Image height="100px"  width="100px" src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" />
    //       </Slide>
    //       <Slide index={4}>
    //         <Image height="100px"  width="100px" src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" />
    //       </Slide>
    //       <Slide index={5}>
    //         <Image height="100px"  width="100px" src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" />
    //       </Slide>
    //     </Slider>
    //     <ButtonPlay childrenPlaying="Pause" childrenPaused="Play" />
    //     <ButtonFirst>First</ButtonFirst>
    //     <ButtonBack>Back</ButtonBack>
    //     <ButtonNext>Next</ButtonNext>
    //     <ButtonLast>Last</ButtonLast>
    //     <DotGroup />
    //   </CarouselProvider>
    // </React.Fragment>

    // <CarouselProvider
    //   visibleSlides={2}
    //   totalSlides={6}
    //   naturalSlideWidth={400}
    //   naturalSlideHeight={500}
    // >
    //   <h2 className={s.headline}>Carousel with custom event handlers.</h2>
    //   <p>
    //     Simple carousel with custom event handlers attached to the{" "}
    //     <code>&lt;Slider /&gt;</code> component&apos;s <code>trayProps</code>{" "}
    //     property. Open your browser developer tools and look at the console log,
    //     then manipulate the carousel.
    //   </p>
    //   <Slider
    //     className={s.slider}
    //     trayProps={{
    //       // clipboard events? Sure why not.
    //       onCopy: eventLogger,
    //       onCut: eventLogger,
    //       onPaste: eventLogger,

    //       // composition events
    //       onCompositionEnd: eventLogger,
    //       onCompositionStart: eventLogger,
    //       onCompositionUpdate: eventLogger,

    //       // keyboard events
    //       onKeyDown: eventLogger,
    //       onKeyPress: eventLogger,
    //       onKeyUp: eventLogger,

    //       // focus events,
    //       onFocus: eventLogger,
    //       onBlur: eventLogger,

    //       // form events,
    //       onChange: eventLogger,
    //       onInput: eventLogger,
    //       onInvalid: eventLogger,
    //       onSubmit: eventLogger,

    //       // mouse events
    //       onClick: eventLogger,
    //       onContextMenu: eventLogger,
    //       onDoubleClick: eventLogger,
    //       onDrag: eventLogger,
    //       onDragEnd: eventLogger,
    //       onDragEnter: eventLogger,
    //       onDragExit: eventLogger,
    //       onDragLeave: eventLogger,
    //       onDragOver: eventLogger,
    //       onDragStart: eventLogger,
    //       onDrop: eventLogger,
    //       onMouseDown: eventLogger,
    //       onMouseEnter: eventLogger,
    //       onMouseLeave: eventLogger,
    //       // onMouseMove: eventLogger,
    //       onMouseOut: eventLogger,
    //       onMouseOver: eventLogger,
    //       onMouseUp: eventLogger,

    //       // touch events
    //       onTouchCancel: eventLogger,
    //       onTouchEnd: eventLogger,
    //       // onTouchMove: eventLogger,
    //       onTouchStart: eventLogger,

    //       // pointer events
    //       onPointerDown: eventLogger,
    //       // onPointerMove: eventLogger,
    //       onPointerUp: eventLogger,
    //       onPointerCancel: eventLogger,
    //       onGotPointerCapture: eventLogger,
    //       onLostPointerCapture: eventLogger,
    //       onPointerEnter: eventLogger,
    //       onPointerLeave: eventLogger,
    //       onPointerOver: eventLogger,
    //       onPointerOut: eventLogger,

    //       draggable: true,
    //     }}
    //   >
    //     <Slide tag="a" index={0}>
    //       <Image src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" />
    //     </Slide>
    //     <Slide tag="a" index={1}>
    //       <Image src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" />
    //     </Slide>
    //     <Slide tag="a" index={2}>
    //       <Image src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" />
    //     </Slide>
    //     <Slide tag="a" index={3}>
    //       <Image src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" />
    //     </Slide>
    //     <Slide tag="a" index={4}>
    //       <Image src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" />
    //     </Slide>
    //     <Slide tag="a" index={5}>
    //       <Image src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" />
    //     </Slide>
    //   </Slider>
    //   <ButtonFirst>First</ButtonFirst>
    //   <ButtonBack>Back</ButtonBack>
    //   <ButtonNext>Next</ButtonNext>
    //   <ButtonLast>Last</ButtonLast>
    //   <DotGroup dotNumbers />
    // </CarouselProvider>

    // <CarouselProvider
    //   visibleSlides={3}
    //   totalSlides={8}
    //   step={2}
    //   naturalSlideWidth={400}
    //   naturalSlideHeight={500}
    //   hasMasterSpinner
    //   infinite
    // >
    //   <h2 className={s.headline}>Infinite Carousel</h2>
    //   <p>
    //     A carousel that returns to the first slide if the user clicks the Next
    //     button while on the last slide and returns to the last slide if the user
    //     clicks the Back button while on the first slide. Also behaves similarly
    //     with swiping left on the first image or right on the last image.
    //   </p>
    //   <Slider className={s.slider}>
    //     <Slide index={0}>
    //       <ImageWithZoom src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" />
    //     </Slide>
    //     <Slide index={1}>
    //       <ImageWithZoom src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" />
    //     </Slide>
    //     <Slide index={2}>
    //       <ImageWithZoom src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" />
    //     </Slide>
    //     <Slide index={3}>
    //       <ImageWithZoom src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" />
    //     </Slide>
    //     <Slide index={4}>
    //       <ImageWithZoom src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" />
    //     </Slide>
    //     <Slide index={5}>
    //       <ImageWithZoom src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" />
    //     </Slide>
    //     <Slide index={6}>
    //       <ImageWithZoom src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" />
    //     </Slide>
    //     <Slide index={7}>
    //       <ImageWithZoom src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" />
    //     </Slide>
    //   </Slider>
    //   <ButtonFirst>First</ButtonFirst>
    //   <ButtonBack>Back</ButtonBack>
    //   <ButtonNext>Next</ButtonNext>
    //   <ButtonLast>Last</ButtonLast>
    //   <DotGroup />
    // </CarouselProvider>

    // <CarouselProvider
    //   visibleSlides={2}
    //   totalSlides={4}
    //   step={1}
    //   naturalSlideWidth={400}
    //   naturalSlideHeight={500}
    //   isIntrinsicHeight
    // >
    //   <h2 className={s.headline}>With intrinsic axis dimension</h2>
    //   <p />
    //   <Slider className={s.slider}>
    //     <Slide index={0}>
    //       <h1>This is a test slide to demonstrate, how this affects height</h1>
    //       <p>
    //         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    //         nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
    //         erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
    //         et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
    //         Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
    //         sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
    //         et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
    //         accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
    //         no sea takimata sanctus est Lorem ipsum dolor sit amet.
    //       </p>
    //     </Slide>
    //     <Slide index={1}>
    //       <h1>This is a test slide to demonstrate, how this affects height</h1>
    //       <p>
    //         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    //         nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
    //         erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
    //         et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
    //         Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
    //         sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
    //         et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
    //         accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
    //         no sea takimata sanctus est Lorem ipsum dolor sit amet.
    //       </p>
    //       <h1>This is a test slide to demonstrate, how this affects height</h1>
    //       <p>
    //         lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    //         nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
    //         erat, sed diam voluptua. at vero eos et accusam et justo duo dolores
    //         et ea rebum. stet clita kasd gubergren, no sea takimata sanctus est
    //         lorem ipsum dolor sit amet. lorem ipsum dolor sit amet, consetetur
    //         sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
    //         et dolore magna aliquyam erat, sed diam voluptua. at vero eos et
    //         accusam et justo duo dolores et ea rebum. stet clita kasd gubergren,
    //         no sea takimata sanctus est lorem ipsum dolor sit amet.
    //       </p>
    //     </Slide>
    //     <Slide index={2}>
    //       <h1>This is a test slide to demonstrate, how this affects height</h1>
    //       <p>
    //         lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    //         nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
    //         erat, sed diam voluptua. at vero eos et accusam et justo duo dolores
    //         et ea rebum. stet clita kasd gubergren, no sea takimata sanctus est
    //         lorem ipsum dolor sit amet. lorem ipsum dolor sit amet, consetetur
    //         sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
    //         et dolore magna aliquyam erat, sed diam voluptua. at vero eos et
    //         accusam et justo duo dolores et ea rebum. stet clita kasd gubergren,
    //         no sea takimata sanctus est lorem ipsum dolor sit amet.
    //       </p>
    //     </Slide>
    //     <Slide index={2}>
    //       <h1>This is a test slide to demonstrate, how this affects height</h1>
    //       <p>
    //         lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    //         nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
    //         erat, sed diam voluptua. at vero eos et accusam et justo duo dolores
    //         et ea rebum. stet clita kasd gubergren, no sea takimata sanctus est
    //         lorem ipsum dolor sit amet. lorem ipsum dolor sit amet, consetetur
    //         sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
    //         et dolore magna aliquyam erat, sed diam voluptua. at vero eos et
    //         accusam et justo duo dolores et ea rebum. stet clita kasd gubergren,
    //         no sea takimata sanctus est lorem ipsum dolor sit amet.
    //       </p>
    //     </Slide>
    //   </Slider>
    //   <ButtonFirst>First</ButtonFirst>
    //   <ButtonBack>Back</ButtonBack>
    //   <ButtonNext>Next</ButtonNext>
    //   <ButtonLast>Last</ButtonLast>
    // </CarouselProvider>
  );
}

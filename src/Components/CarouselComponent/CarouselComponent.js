"use client";

import Carousel from "react-bootstrap/Carousel";
import img from "./../../../public/Articles/corona.png";
import Image from "next/image";

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <div
          className="position-relative d-block w-full"
          style={{ height: "330px" }}
        >
          <Image
            fill
            src={img}
            className="object-fit-cover card-img-top"
            alt="First slide"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8/OVYPQAH/QL+9KZjmgAAAABJRU5ErkJggg=="
          />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div
          className="position-relative d-block w-full"
          style={{ height: "330px" }}
        >
          <Image
            fill
            src={img}
            className="object-fit-cover card-img-top"
            alt="First slide"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8/OVYPQAH/QL+9KZjmgAAAABJRU5ErkJggg=="
          />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div
          className="position-relative d-block w-full"
          style={{ height: "330px" }}
        >
          <Image
            fill
            src={img}
            className="object-fit-cover card-img-top"
            alt="First slide"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8/OVYPQAH/QL+9KZjmgAAAABJRU5ErkJggg=="
          />
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;

"use client";

import Carousel from "react-bootstrap/Carousel";
import img from "./../../../public/Articles/corona.png";
import Image from "next/image";

function CarouselComponent({ data }) {
  return (
    <Carousel>
      {data.map((singleItem) => {
        return (
          <Carousel.Item key={singleItem.Id}>
            <div
              className="position-relative d-block w-full"
              style={{ height: "330px" }}
            >
              <Image
                fill
                src={singleItem.sliderimage}
                className="object-fit-cover card-img-top"
                alt="First slide"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8/OVYPQAH/QL+9KZjmgAAAABJRU5ErkJggg=="
              />
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default CarouselComponent;

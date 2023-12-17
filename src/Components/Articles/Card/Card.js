"use client";

import Image from "next/image";
import ModalComponent from "./ModalComponent";

function Card({ cardDetails }) {
  // console.log("cardDetails ", cardDetails);
  return (
    <div>
      <div className="card" style={{ width: "230px" }}>
        <div
          className="position-relative"
          style={{ width: "230px", height: "230px" }}
        >
          <Image
            fill
            src={cardDetails.post_image}
            className="object-fit-cover card-img-top"
            alt="Card image cap"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8/OVYPQAH/QL+9KZjmgAAAABJRU5ErkJggg=="
          />
        </div>

        <div className="card-body">
          <h5 className="card-title">{cardDetails.title.substring(0, 20)}</h5>
          <div className="d-flex justify-content-center">
            <ModalComponent cardDetails={cardDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

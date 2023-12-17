import AccordionComponent from "@/Components/AccordionComponent/AccordionComponent";
import ModalComponent from "@/Components/ModalComponent/ModalComponent";
import OffcanvasComponent from "@/Components/OffcanvasComponent/OffcanvasComponent";
import Image from "next/image";
import img from "../../public/Articles/c.jpg";
import CarouselComponent from "@/Components/CarouselComponent/CarouselComponent";

//import "bootstrap/dist/css/bootstrap.min.css";

async function getData() {
  const res = await fetch(
    "https://stage2.api-care-box.click:444/api/v1/slider_image",
    { cache: "no-store" }
    // { next: { revalidate: 10 } }
  ); // { next: { revalidate: value in second} }
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  // console.log("data = ", data);
  //console.log("Article page api called");

  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="container">
      <div className="mt-4">
        <CarouselComponent data={data} />
      </div>

      <div className="mt-4">
        <AccordionComponent />
      </div>

      <div className="mt-4">
        <OffcanvasComponent />
      </div>

      <div className="mt-4">
        <ModalComponent />
      </div>

      <div>
        <Image width={400} height={400} src={img} />
      </div>
    </div>
  );
}

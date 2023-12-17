import AccordionComponent from "@/Components/AccordionComponent/AccordionComponent";
import ModalComponent from "@/Components/ModalComponent/ModalComponent";
import OffcanvasComponent from "@/Components/OffcanvasComponent/OffcanvasComponent";
import Image from "next/image";
import img from "../../public/Articles/c.jpg";
import CarouselComponent from "@/Components/CarouselComponent/CarouselComponent";

//import "bootstrap/dist/css/bootstrap.min.css";
export default function Home() {
  return (
    <div className="container">
      <div className="mt-4">
        <CarouselComponent />
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

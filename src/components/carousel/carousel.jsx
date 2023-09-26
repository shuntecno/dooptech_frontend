import Banner from "../../images/banner.png";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

function CarouselCom() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 banner" src={Banner} alt="First slide" />
        <Carousel.Caption>
          <div  className="center ">
           <hr id="hr" ></hr>
            <h3 className="text">BELAJAR HARUSNYA MENYENANGKAN</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCom;

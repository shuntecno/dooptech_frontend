import Carousel from "../components/carousel/carousel";
import "./homepage.css";
import Card from "../components/card/card";
import CardGroup from "react-bootstrap/CardGroup";
import icon1 from '../images/contract 1.svg'
import icon2 from '../images/book open.svg'
import icon3 from '../images/team.svg'

function HomePage() {
  return (
    <>
      <Carousel></Carousel>
      <div className="label">
        <h1>Service</h1>
        <div className="d-flex justify-content-center">
          <hr className="hr"></hr>
          <hr className="hr"></hr>
        </div>
        <p>Click on the features to learn More</p>
      </div>
      <section className="d-flex justify-content-center">
        <CardGroup>
          <Card text='Project' svg={icon1}></Card>
          <Card text="Mentoring" svg={icon2}></Card>
          <Card text="Community" svg={icon3}></Card>
        </CardGroup>
      </section>
      <div className="label">
        <h1>Project</h1>
        <div className="d-flex justify-content-center">
          <hr className="hr"></hr>
          <hr className="hr"></hr>
        </div>
        <p>Click on the features to learn More</p>
      </div>
    </>
  );
}

export default HomePage;

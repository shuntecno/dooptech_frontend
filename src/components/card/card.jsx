import Card from "react-bootstrap/Card";

import "./card.css";




function CardService(props) {

    const { text,svg } = props;

  return (
    <>
      <Card border="light" className="card">
        <Card.Body>
          <div className="icon d-flex justify-content-center">
            <Card.Img variant="left" src={svg} />
          </div>
          <Card.Title>{text}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default CardService;

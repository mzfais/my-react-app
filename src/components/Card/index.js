import React from "react";
import "./card.css";
import { Card, Col } from "react-bootstrap";
import MyButton from "../Button";
// import PaginationPage from "../Pagination";

const CardItem = ({ item }) => {
  return (
    <Col lg={3} md={6} sm={12}>
      <Card className="mt-4">
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text className="card-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            blanditiis ad fugiat. Earum dicta, mollitia illum totam fugiat
            placeat animi nostrum molestias hic laboriosam vitae obcaecati
            cumque rerum maxime facere.
          </Card.Text>
          <div className="d-flex justify-content-start mt-2">
            <span className="card-info-1">Batch</span>
            <span className="card-info-2">{item.date}</span>
          </div>
          <div className="d-flex justify-content-start">
            <span className="card-info-1">Mentor</span>
            <span className="card-info-2">{item.mentor}</span>
          </div>

          <div className="original-price">{item.price}</div>
          <span className="promo-price text-success">{item.promo}</span>
          <MyButton btnClassName={"buy-btn"} btnText={"Beli Sekarang"} />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardItem;

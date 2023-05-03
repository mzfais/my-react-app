import React from "react";
import "./productlist.css";
import CardItem from "./../Card";
import MyPagination from "./../Pagination";
import { Col, Container, Row } from "react-bootstrap";

const ProductListCard = ({ productList }) => {
  return (
    <section className="product-list pb-5 mb-5">
      <Container>
        <Row>
          {productList.map((item, idx) => {
            return <CardItem item={item} key={idx} />;
          })}
        </Row>
        <Row>
          <Col md={12}>
            <MyPagination />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default ProductListCard;

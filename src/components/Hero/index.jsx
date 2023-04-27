import React from "react";
import "./hero.css";
import heroImg from "../../assets/images/hero_lady.png";
import { Container, Row, Col } from "react-bootstrap";

function Hero() {
  return (
    <section className="hero">
      <Container>
        <Row>
          <Col lg={5} sm={12}>
            <h1 className="hero-title">Jadi expert bersama edspert.id</h1>
            <p className="hero-subtitle">
              Tingkatkan skill dan pengetahuan bersama para mentor terbaik di
              bidangnya, untuk siapkan karir impian anda.
            </p>
          </Col>
          <Col lg={6} sm={12}>
            <img className="hero-img" src={heroImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;

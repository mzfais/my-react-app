import React from "react";
import "./footer.css";
import ellipseImg from "../../assets/images/ellipse.png";
import edsLogo from "../../assets/images/logo_Edspert.png";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <section className="mt-5 footer">
      <img alt="Ellipse11234" src={ellipseImg} class="ellipse" />
      <footer>
        <Container>
          <Row>
            <Col lg="6" md="12" sm="12">
              <img className="img-footer" src={edsLogo} alt="" />
              <p className="footer-item">
                Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten
                Sleman, Daerah Istimewa Yogyakarta 55581
              </p>
            </Col>
            <Col lg="2" md="4" sm="12">
              <div className="footer-item">
                <h4 className="footer-header">Progam</h4>
                <ul>
                  <li>
                    <a href="#">Online Course</a>
                  </li>
                  <li>
                    <a href="#">Mini bootcamp</a>
                  </li>
                  <li>
                    <a href="#">Bootcamp</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="2" md="4" sm="12">
              <div className="footer-item">
                <h4 className="footer-header">Bidang Ilmu</h4>
                <ul>
                  <li>
                    <a href="#">Digital marketing</a>
                  </li>
                  <li>
                    <a href="#">Product management</a>
                  </li>
                  <li>
                    <a href="#">English</a>
                  </li>
                  <li>
                    <a href="#">Programming</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="2" md="4" sm="12">
              <div className="footer-item">
                <h4 className="footer-header">Tentang Edspert</h4>
                <ul>
                  <li>
                    <a href="#">Bantuan</a>
                  </li>
                  <li>
                    <a href="#">Kontak kami</a>
                  </li>
                  <li>
                    <a href="#">Media sosial</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="text-center cp-text">
              <p>© {new Date().getFullYear()} | mzfais </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </section>
  );
}

export default Footer;

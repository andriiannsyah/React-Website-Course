import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";

function SyaratKeten() {
  return (
    <div className="syaratKetentuan-page">
      <div className="syaratKetentuan min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp">Syarat & Ketentuan</h1>
              <p className="text-center animate__animated animate__fadeInUp">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col className="pt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea porro est saepe libero repellat reprehenderit fugiat, eum eius nam odit eaque accusamus, impedit repudiandae, hic voluptatum assumenda placeat doloribus
                perspiciatis totam? Quisquam at temporibus doloribus sit, et aperiam quos! Ullam illo corrupti ducimus cupiditate dolorum nesciunt! Expedita quas accusamus provident!
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">1. Lorem</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi laboriosam itaque iusto dolorum sed labore similique quam natus veritatis eum ipsum magni, earum nesciunt omnis dolore velit voluptatibus facilis iure
                voluptatum animi possimus maiores. Fugiat voluptates sequi numquam quasi, excepturi sint sit saepe blanditiis nisi maxime dolor eligendi nulla!
              </p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quae velit eveniet voluptatem, nisi eaque dolorum? Aliquam officia rem consectetur reprehenderit ipsum tempora, ab in velit culpa perferendis, quo magnam?</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, est iusto! At quas earum aliquam aliquid, repellendus voluptatum libero velit error. Provident, labore corrupti quasi ducimus porro officia facilis! Sunt.
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">2. Lorem</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptatem pariatur consectetur quis quia suscipit dolor dicta aperiam sunt quidem iste dolorem? Officia quod voluptatum perspiciatis sequi tenetur, rerum
                optio quidem labore reprehenderit sit fuga nostrum provident molestiae corporis! Ratione cumque, tenetur rerum magni ipsa officia voluptates assumenda error minima voluptate placeat, alias dolore accusamus nobis autem atque
                nisi laudantium expedita cum aliquam deleniti animi fugit. Perspiciatis ipsam deleniti quidem voluptatem sit facere fugit quibusdam, quo, eaque iusto, illo provident?
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
}

export default SyaratKeten;

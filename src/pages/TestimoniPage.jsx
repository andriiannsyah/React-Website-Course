import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data/index";
import FaqComponent from "../components/FaqComponent";

function TestimoniPage() {
  return (
    <div className="testimonial-page ">
      <div className="testimonial">
        <Container>
          <Row className="mb-5">
            <Col>
              <h1 className="text-center fw-bold animate__animated animate__fadeInUp">Testimonial</h1>
              <p className="text-center animate__animated animate__fadeInUp">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1 ">
            {testimonial.map((data) => {
              return (
                <Col key={data.id} className="mb-5">
                  <p className="desc shadow-sm p-2">{data.desc}</p>
                  <div className="people">
                    <img src={data.image} alt="" />
                    <div>
                      <h5 className="mb-1">{data.name}</h5>
                      <p className="mb-0 fw-bold">{data.skill}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
}

export default TestimoniPage;

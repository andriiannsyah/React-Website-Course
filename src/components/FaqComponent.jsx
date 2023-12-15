import { Accordion, Container, Row, Col } from "react-bootstrap";
import { faq } from "../data/index";

function FaqComponent() {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw-bold animate__animated animate__fadeInUp ">Pertanyaan Yang Sering Ditanyakan</h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-4 pt-5">
          {faq.map((dataFaq) => {
            return (
              <Col key={dataFaq.id}>
                <Accordion className="shadow-sm">
                  <Accordion.Item eventKey={dataFaq.eventKey}>
                    <Accordion.Header>{dataFaq.title}</Accordion.Header>
                    <Accordion.Body>{dataFaq.desc}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default FaqComponent;

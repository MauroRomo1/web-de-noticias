import { Col, Form, Row } from "react-bootstrap";

const Formulario = () => {
  return (
    <section className="container my-4">
      <Row className="justify-content-center">
        <Col className="border border-3" md="8">
          <Form>
            <Form.Group className="my-4" controlId="formCategoria">
              <Form.Label>Buscar por categoria:</Form.Label>
              <Form.Select>
                <option defaultValue="top">top</option>
                <option value="business">negocios</option>
                <option value="entertainment">entretenimiento</option>
                <option value="food">alimentos</option>
                <option value="health">salud</option>
                <option value="politics">política</option>
                <option value="science">ciencia</option>
                <option value="sports">Deportes</option>
                <option value="technology">tecnología</option>
                <option value="tourism">turismo</option>
                <option value="world">mundo</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </section>
  );
};

export default Formulario;

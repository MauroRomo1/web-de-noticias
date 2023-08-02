import { Col, Form, Row } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";
import { useState } from "react";

const Formulario = () => {
  const [selectValor, setselectValor] = useState("top");

  const handleChange = (e) => {
    setselectValor(e.target.value);
  };

  return (
    <>
      <section className="container my-4">
        <Row className="justify-content-center">
          <Col className="border border-3" xs="11" lg="8">
            <Form>
              <Form.Group className="my-4" controlId="formCategoria">
                <Form.Label>Buscar por categoria:</Form.Label>
                <Form.Select value={selectValor} onChange={handleChange}>
                  <option value="top">top</option>
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
      <ListaNoticias />
    </>
  );
};

export default Formulario;

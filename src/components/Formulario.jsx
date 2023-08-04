import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";
import { useEffect, useState } from "react";
import SpinnerComponent from "./SpinnerComponent";

const Formulario = () => {
  const [categoria, setCategoria] = useState("top");

  const [pais, setPais] = useState("ar");

  const [noticias, setnoticias] = useState([]);

  const [mostrarSpinner, setmostrarSpinner] = useState(true);

  const handleChange = (e) => {
    setCategoria(e.target.value);
  };

  const handleChangePais = (e) => {
    setPais(e.target.value);
  };

  useEffect(() => {
    ConsultarNewsData(categoria, pais);
  }, [categoria, pais]);

  const ConsultarNewsData = async (categoria, pais) => {
    setmostrarSpinner(true);

    const keyAPI = "pub_26960b50cf8d5f3f62e9d05233362ccc84b18";
    try {
      const repuesta = await fetch(
        `https://newsdata.io/api/1/news?apikey=${keyAPI}&category=${categoria}&country=${pais}`
      );
      const { results } = await repuesta.json();

      setmostrarSpinner(false);
      setnoticias(results);
    } catch (error) {
      setmostrarSpinner(false);
      console.error(error);
    }
  };

  return (
    <>
      <section className="container my-5">
        <Row className="justify-content-center">
          <Col className="border border-3 bg-white shadowCard" xs="11" lg="8">
            <Form>
              <Row>
                <Col md>
                  <Form.Group className="my-3" controlId="formCategoria">
                    <Form.Label>Buscar por categoria:</Form.Label>
                    <Form.Select value={categoria} onChange={handleChange}>
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
                </Col>
                <Col md>
                  <Form.Group className="my-3" controlId="formPais">
                    <Form.Label>Buscar por pais:</Form.Label>
                    <Form.Select value={pais} onChange={handleChangePais}>
                      <option value="af">Afghanistan</option>
                      <option value="al">Albania</option>
                      <option value="dz">Algeria</option>
                      <option value="ao">Angola</option>
                      <option value="ar">Argentina</option>
                      <option value="au">Australia</option>
                      <option value="at">Austria</option>
                      <option value="az">Azerbaijan</option>
                      <option value="bh">Bahrain</option>
                      <option value="bd">Bangladesh</option>
                      <option value="bb">Barbados</option>
                      <option value="by">Belarus</option>
                      <option value="be">Belgium</option>
                      <option value="bm">Bermuda</option>
                      <option value="bt">Bhutan</option>
                      <option value="bo">Bolivia</option>
                      <option value="ba">Bosnia And Herzegovina</option>
                      <option value="br">Brazil</option>
                      <option value="bn">Brunei</option>
                      <option value="bg">Bulgaria</option>
                      <option value="bf">Burkina Faso</option>
                      <option value="kh">Cambodia</option>
                      <option value="cm">Cameroon</option>
                      <option value="ca">Canada</option>
                      <option value="cv">Cape Verde</option>
                      <option value="ky">Cayman Islands</option>
                      <option value="cl">Chile</option>
                      <option value="cn">China</option>
                      <option value="co">Colombia</option>
                      <option value="km">Comoros</option>
                      <option value="cr">Costa Rica</option>
                      <option value="ci">Côte d'Ivoire</option>
                      <option value="hr">Croatia</option>
                      <option value="cu">Cuba</option>
                      <option value="cy">Cyprus</option>
                      <option value="cz">Czech Republic</option>
                      <option value="dk">Denmark</option>
                      <option value="dj">Djibouti</option>
                      <option value="dm">Dominica</option>
                      <option value="do">Dominican Republic</option>
                      <option value="cd">DR Congo</option>
                      <option value="ec">Ecuador</option>
                      <option value="eg">Egypt</option>
                      <option value="sv">El Salvador</option>
                      <option value="ee">Estonia</option>
                      <option value="et">Ethiopia</option>
                      <option value="fj">Fiji</option>
                      <option value="fi">Finland</option>
                      <option value="fr">France</option>
                      <option value="pf">French Polynesia</option>
                      <option value="ga">Gabon</option>
                      <option value="ge">Georgia</option>
                      <option value="de">Germany</option>
                      <option value="gh">Ghana</option>
                      <option value="gr">Greece</option>
                      <option value="gt">Guatemala</option>
                      <option value="gn">Guinea</option>
                      <option value="ht">Haiti</option>
                      <option value="hn">Honduras</option>
                      <option value="hk">Hong Kong</option>
                      <option value="hu">Hungary</option>
                      <option value="is">Iceland</option>
                      <option value="in">India</option>
                      <option value="id">Indonesia</option>
                      <option value="iq">Iraq</option>
                      <option value="ie">Ireland</option>
                      <option value="il">Israel</option>
                      <option value="it">Italy</option>
                      <option value="jm">Jamaica</option>
                      <option value="jp">Japan</option>
                      <option value="jo">Jordan</option>
                      <option value="kz">Kazakhstan</option>
                      <option value="ke">Kenya</option>
                      <option value="kw">Kuwait</option>
                      <option value="kg">Kyrgyzstan</option>
                      <option value="lv">Latvia</option>
                      <option value="lb">Lebanon</option>
                      <option value="ly">Libya</option>
                      <option value="lt">Lithuania</option>
                      <option value="lu">Luxembourg</option>
                      <option value="mo">Macau</option>
                      <option value="mk">Macedonia</option>
                      <option value="mg">Madagascar</option>
                      <option value="mw">Malawi</option>
                      <option value="my">Malaysia</option>
                      <option value="mv">Maldives</option>
                      <option value="ml">Mali</option>
                      <option value="mt">Malta</option>
                      <option value="mr">Mauritania</option>
                      <option value="mx">Mexico</option>
                      <option value="md">Moldova</option>
                      <option value="mn">Mongolia</option>
                      <option value="me">Montenegro</option>
                      <option value="ma">Morocco</option>
                      <option value="mz">Mozambique</option>
                      <option value="mm">Myanmar</option>
                      <option value="na">Namibia</option>
                      <option value="np">Nepal</option>
                      <option value="nl">Netherlands</option>
                      <option value="nz">New Zealand</option>
                      <option value="ne">Niger</option>
                      <option value="ng">Nigeria</option>
                      <option value="kp">North Korea</option>
                      <option value="no">Norway</option>
                      <option value="om">Oman</option>
                      <option value="pk">Pakistan</option>
                      <option value="pa">Panama</option>
                      <option value="py">Paraguay</option>
                      <option value="pe">Peru</option>
                      <option value="ph">Philippines</option>
                      <option value="pl">Poland</option>
                      <option value="pt">Portugal</option>
                      <option value="pr">Puerto Rico</option>
                      <option value="ro">Romania</option>
                      <option value="ru">Russia</option>
                      <option value="rw">Rwanda</option>
                      <option value="ws">Samoa</option>
                      <option value="sm">San Marino</option>
                      <option value="sa">Saudi Arabia</option>
                      <option value="sn">Senegal</option>
                      <option value="rs">Serbia</option>
                      <option value="sg">Singapore</option>
                      <option value="sk">Slovakia</option>
                      <option value="si">Slovenia</option>
                      <option value="sb">Solomon Islands</option>
                      <option value="so">Somalia</option>
                      <option value="za">South Africa</option>
                      <option value="kr">South Korea</option>
                      <option value="es">Spain</option>
                      <option value="lk">Sri Lanka</option>
                      <option value="sd">Sudan</option>
                      <option value="se">Sweden</option>
                      <option value="ch">Switzerland</option>
                      <option value="sy">Syria</option>
                      <option value="tw">Taiwan</option>
                      <option value="tj">Tajikistan</option>
                      <option value="tz">Tanzania</option>
                      <option value="th">Thailand</option>
                      <option value="to">Tonga</option>
                      <option value="tn">Tunisia</option>
                      <option value="tr">Turkey</option>
                      <option value="tm">Turkmenistan</option>
                      <option value="ug">Uganda</option>
                      <option value="ua">Ukraine</option>
                      <option value="ae">United Arab Emirates</option>
                      <option value="gb">United Kingdom</option>
                      <option value="us">United States of America</option>
                      <option value="uy">Uruguay</option>
                      <option value="uz">Uzbekistan</option>
                      <option value="ve">Venezuela</option>
                      <option value="vi">Vietnam</option>
                      <option value="ye">Yemen</option>
                      <option value="zm">Zambia</option>
                      <option value="zw">Zimbabwe</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </section>

      {mostrarSpinner ? (
        <SpinnerComponent />
      ) : (
        <ListaNoticias noticias={noticias} />
      )}
    </>
  );
};

export default Formulario;

import { Col, Form, Row } from 'react-bootstrap';
import Select from 'react-select';

interface QuoteBodyProps {}

const QuoteBody: React.FC<QuoteBodyProps> = _props => {
  const Currencyoptions = [
    {value: 'Select Currency', label: 'Select Currency'},
    {value: 'USD - (United States Dollar)', label: 'USD - (United States Dollar)'},
    {value: 'BHD - (Bahraini Dinar)', label: 'BHD - (Bahraini Dinar)'},
    {value: 'KWD - (Kuwaiti Dinar)', label: 'KWD - (Kuwaiti Dinar)'},
    {value: 'CHF - (Swiss Franc)', label: 'CHF - (Swiss Franc)'},
  ];
  return (
    <Col xl={12}>
      <Row>
        <Col xl={4} lg={4} md={6} sm={6}>
          <p className="dw-semibold mb-2">
            Datos Cliente:
          </p>
          <div className="row gy-2">
            <Col xl={12}>
              <Form.Control type="text" className=" form-control-light" id="Company-Name"
                            placeholder="RUT" defaultValue=""/>
            </Col>
            <Col xl={12}>
              <Form.Control type="text" className=" form-control-light" id="company-address"
                            placeholder="Nombre" defaultValue=""/>
            </Col>
            <Col xl={12}>
              <Form.Control type="text" className=" form-control-light" id="company-mail"
                            placeholder="Email" defaultValue=""/>
            </Col>
            <Col xl={12}>
              <Form.Control type="text" className=" form-control-light" id="company-phone"
                            placeholder="Teléfono" defaultValue=""/>
            </Col>
          </div>
        </Col>
        <Col xl={4} lg={4} md={6} sm={6} className=" ms-auto mt-sm-0 mt-3">
          <p className="dw-semibold mb-2">
            Datos Vehículo:
          </p>
          <div className="row gy-2">
            <Col xl={12}>
              <Form.Control type="text" className=" form-control-light" id="car-id"
                            placeholder="Patente" defaultValue=""/>
            </Col>
            <Col xl={12}>
              <Form.Control type="text" className=" form-control-light" id="car-brand"
                            placeholder="Marca" defaultValue=""/>
            </Col>
            <Col xl={12}>
              <Form.Control type="text" className=" form-control-light" id="car-model"
                            placeholder="Modelo" defaultValue=""/>
            </Col>
            <Col xl={12}>
              <Form.Control type="text" className=" form-control-light" id="car-year"
                            placeholder="Año" defaultValue=""/>
            </Col>
            <Col xl={12}>
              <Form.Control type="text" className=" form-control-light" id="car-year"
                            placeholder="Color" defaultValue=""/>
            </Col>
            <Col xl={12} className="choices-control">
              <p className="dw-semibold mb-2 mt-2">
                Currency :
              </p>
              <Select options={Currencyoptions} classNamePrefix="Select2" menuPlacement="auto"
                      className="multi-select"
                      placeholder="Select Currency"/>
            </Col>
          </div>
        </Col>
      </Row>
    </Col>
  )
}

export default QuoteBody;

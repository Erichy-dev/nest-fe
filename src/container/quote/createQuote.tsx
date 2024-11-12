import { FC, Fragment } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Pageheader from '../../components/pageheader/pageheader.tsx';
import togglelogo from '../../assets/images/brand-logos/toggle-logo.png';
import QuoteBody from './components/quoteBody.tsx';
import QuoteDetail from './components/quoteDetail.tsx';

interface CreateQuoteProps {}

const CreateQuote: FC<CreateQuoteProps> = () => {

  return (
    <Fragment>
      <Pageheader title="Crear Cotización" heading="Cotización" active="Crear Cotización"/>
      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="d-md-flex d-block">
              <div className="h5 mb-0 d-sm-flex d-block align-items-center">
                <div>
                  <img src={togglelogo} alt=""/>
                </div>
                <div className="ms-sm-2 ms-0 mt-sm-0 mt-2">
                  <Form.Label >Cotización</Form.Label>
                </div>
                <div className="mx-2">:</div>
                <div className="mt-sm-0 mt-2">
                  <Form.Label >XXXX</Form.Label>
                </div>
              </div>
              <div className="ms-auto mt-md-0 mt-2">
                <Button variant="" className="btn btn-sm btn-primary me-2">Guardar PDF<i
                  className="ri-file-pdf-line ms-1 align-middle d-inline-block"></i></Button>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="row gy-3">
                <QuoteBody/>
                <QuoteDetail/>
              </div>
            </Card.Body>
            <Card.Footer className=" text-end">
              <Button variant="primary" className="btn">Crear <i
                className="ri-send-plane-2-line ms-1 align-middle d-inline-block"></i></Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default CreateQuote;

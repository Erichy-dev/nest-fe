import { Button, Col, Form, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface QuoteDetailPropd {}

const QuoteDetail: React.FC<QuoteDetailPropd> = _props => {
  function dec(el: any) {
    const unit = el.currentTarget.parentElement.querySelector("input").value;

    if (Number(unit) === 0) {
      return false;
    } else {
      el.currentTarget.parentElement.querySelector("input").value--;
    }
  }

  function inc(el: any) {
    el.currentTarget.parentElement.querySelector("input").value++;
  }
  return (
    <Col xl={12}>
      <div className="table-responsive">
        <Table className="table nowrap text-nowrap border mt-3">
          <thead>
          <tr>
            <th>PRODUCT NAME</th>
            <th>DESCRIPTION</th>
            <th>QUANTITY</th>
            <th>PRICE PER UNIT</th>
            <th>TOTAL</th>
            <th>ACTION</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <Form.Control type="text" className=" form-control-light" placeholder="Enter Product Name"/>
            </td>
            <td>
              <Form.Control as="textarea" rows={1} className=" form-control-light"
                            placeholder="Enter Description"/>
            </td>
            <td className="invoice-quantity-container">
              <div className="input-group border rounded flex-nowrap">
                <Button variant=""
                        className="btn btn-icon btn-primary input-group-text flex-fill product-quantity-minus"
                        onClick={dec}><i className="ri-subtract-line"></i></Button>
                <Form.Control type="text" className=" form-control-sm border-0 text-center w-100"
                              aria-label="quantity" id="product-quantity4" defaultValue="1"/>
                <Button variant=""
                        className="btn btn-icon btn-primary input-group-text flex-fill product-quantity-plus"
                        onClick={inc}><i className="ri-add-line"></i></Button>
              </div>
            </td>
            <td><Form.Control className=" form-control-light" placeholder="" type="text"
                              defaultValue="$60.00"/></td>
            <td><Form.Control className=" form-control-light" placeholder="" type="text"
                              defaultValue="$120.00"/></td>
            <td>
              <Button variant="" className="btn btn-sm btn-icon btn-danger-light"><i
                className="ri-delete-bin-5-line"></i></Button>
            </td>
          </tr>

          <tr>
            <td colSpan={6} className="border-bottom-0"><Link className="btn btn-light" to="#"><i
              className="bi bi-plus-lg"></i> Add Product</Link></td>
          </tr>
          <tr>
            <td colSpan={4}></td>
            <td colSpan={2}>
              <table className="table table-sm text-nowrap mb-0 table-borderless">
                <tbody>
                <tr>
                  <th scope="row">
                    <div className="fw-semibold">Neto :</div>
                  </th>
                  <td>
                    <Form.Control type="text" className=" form-control-light invoice-amount-input"
                                  placeholder="" defaultValue=""/>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="fw-semibold">IVA :</div>
                  </th>
                  <td>
                    <Form.Control type="text" className=" form-control-light invoice-amount-input"
                                  placeholder="" defaultValue=""/>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="fs-14 fw-semibold">Total :</div>
                  </th>
                  <td>
                    <Form.Control type="text" className=" form-control-light invoice-amount-input"
                                  placeholder="" defaultValue=""/>
                  </td>
                </tr>
                </tbody>
              </table>
            </td>
          </tr>
          </tbody>
        </Table>
      </div>
    </Col>
  )
}

export default QuoteDetail;

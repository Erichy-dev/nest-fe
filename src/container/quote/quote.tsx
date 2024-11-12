import { FC, Fragment, useEffect, useState } from 'react';
import { Card, Col, Dropdown, Form, Pagination, Row, Table } from 'react-bootstrap';
import Pageheader from '../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
import { quoteService } from './services/quote.service.tsx';
import { Cotizacion } from '@ismalabs/gear-garage-model/dist/objects';
import { dateUtil } from '../../utils/Date.util.tsx';
import { numericUtil } from '../../utils/numeric.util.tsx';

interface JobslistProps {}

const Quote: FC<JobslistProps> = () => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page]);
  const paginationSize = 50;
  const [search, setSearch] = useState('');
  const [totalPages, setTotalPages] = useState(1);
  const [quotations, setQuotations] = useState<Cotizacion[]>([]);

  const fetchData = (search = '', selectedPage?: number) => {
    quoteService.getPage(selectedPage ?? page, paginationSize, search)
      .then((response) => {
        console.log(response);
        setQuotations(response.quotations);
        setTotalPages(response.totalPages);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const searchData = (event: any) => {
    setSearch(event.target.value);
    fetchData(event.target.value, 1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    fetchData(search, newPage);
  };

  return (
    <Fragment>
      <Pageheader title="Quotes List" heading="Quotes" active="Quotes List" />
      <Row>
        <Col xl={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="card-header justify-content-between">
              <Card.Title>
                List of Quotes
              </Card.Title>
              <div className="d-flex flex-wrap gap-2">
                <Link to={`${import.meta.env.BASE_URL}management/quote/new/`} className="btn btn-primary btn-wave btn-sm">
                  <i className="ri-add-line me-1 align-middle"></i>New Quote
                </Link>
                <div>
                  <Form.Control className="form-control form-control-sm" type="text" placeholder="Search Here"
                                aria-label=".form-control-sm example" value={search} onChange={searchData} />
                </div>
                <Dropdown className="dropdown">
                  <Dropdown.Toggle href="#" className="btn btn-primary btn-sm btn-wave no-caret"
                                  data-bs-toggle="dropdown" aria-expanded="false">
                      Filter<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu role="menu">
                      <Dropdown.Item href="#">Date</Dropdown.Item>
                      <Dropdown.Item href="#">Brand</Dropdown.Item>
                      <Dropdown.Item href="#">Model</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <Table className="table table-hover text-nowrap">
                  <thead>
                  <tr>
                    <th scope="col">Creation</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Model</th>
                    <th scope="col">Year</th>
                    <th scope="col">Net</th>
                    <th scope="col">VAT</th>
                    <th scope="col">Total</th>
                  </tr>
                  </thead>
                  <tbody>
                  {quotations.map((quote) => (
                    <tr key={quote.id}>
                      <td>
                        {dateUtil.formatDate(quote.createdAt)}
                      </td>
                      <td>
                        {quote.modelo.marca.nombre}
                      </td>
                      <td>{quote.modelo.nombre}</td>
                      <td>{quote.modelo.year}</td>
                      <td>{numericUtil.formatCurrency(quote.neto)}</td>
                      <td>{numericUtil.formatCurrency(quote.iva)}</td>
                      <td>{numericUtil.formatCurrency(quote.total)}</td>
                      <td>
                        <Link to={`${import.meta.env.BASE_URL}apps/jobs/jobdetails/`}
                              className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                          <i className="ri-eye-line"></i>
                        </Link>
                        <Link to="#"
                              className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                          <i className="ri-edit-line"></i>
                        </Link>
                        <Link to="#" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                          <i className="ri-delete-bin-line"></i>
                        </Link>
                      </td>
                    </tr>
                  ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
            <Card.Footer className="border-top-0">
              <div className="d-flex align-items-center flex-wrap overflow-auto">
                <div className="mb-2 mb-sm-0">
                  Showing <b>{(page - 1) * paginationSize + 1}</b> to <b>{Math.min(page * paginationSize, quotations.length)}</b> of <b>{quotations.length}</b> entries <i
                  className="bi bi-arrow-right ms-2 fw-semibold"></i>
                </div>
                <div className="ms-auto">
                  <Pagination className="pagination mb-0 overflow-auto">
                    <Pagination.Item
                      disabled={page === 1}
                      onClick={() => handlePageChange(page - 1)}
                    >
                      Previous
                    </Pagination.Item>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <Pagination.Item
                        key={pageNum}
                        active={pageNum === page}
                        onClick={() => handlePageChange(pageNum)}
                      >
                        {pageNum}
                      </Pagination.Item>
                    ))}
                    <Pagination.Item
                      disabled={page === totalPages}
                      onClick={() => handlePageChange(page + 1)}
                    >
                      Next
                    </Pagination.Item>
                  </Pagination>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Quote;

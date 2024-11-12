import  { FC, Fragment, useEffect, useState } from 'react';
import { Alert, Button, Card, Col, Form, InputGroup, Nav, Tab } from 'react-bootstrap';
import logo from "../assets/images/brand-logos/gear-garage.jpeg";
import { Link, useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { LocalStorageBackup } from '../components/common/switcher/switcherdata/switcherdata';
import { ThemeChanger } from "../redux/action";
import { authService } from './auth.api.tsx';
import { SessionResponse } from '../types';
import { useAuth } from '../contexts';

interface LoginProps { }

const Login: FC<LoginProps> = ({ ThemeChanger }: any) => {
    const navigate = useNavigate();
    const auth = useAuth();
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [err, setError] = useState("");
    const [data, setData] = useState({
        "email": "",
        "password": "",
    });
    const changeHandler = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError("");
    };
    const routeChange = () => {
        const path = `${import.meta.env.BASE_URL}dashboards/crm/`;
        navigate(path);
    };

    const sigin = (e: any) => {
        e.preventDefault();
        authService
          .login(data.email, data.password)
          .then((data: SessionResponse) => {
              console.log(data.user);
              auth.login(data.user, data.access_token);
              routeChange();
            })
            .catch((err: Error) => {
              console.error(err);
              setError(err.message);
          });
    };

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            sigin(e);
        }
    };

    useEffect(() => {
        LocalStorageBackup(ThemeChanger);
    }, []);

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center align-items-center authentication authentication-basic h-100">
                    <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="react">
                            <Card>
                                <Nav variant="pills" className="justify-content-center authentication-tabs">
                                    <Nav.Item>
                                        <Nav.Link eventKey="react"><img src={logo} alt='logo2' height={50} width={50} /></Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="react" className='border-0 pb-2'>
                                        <div className="p-4">
                                            <p className="h5 fw-semibold mb-2 text-center">Sign In</p>
                                            <p className="mb-4 text-muted op-7 fw-normal text-center">Welcome back!</p>
                                            <div className="row gy-3">
                                                {err && <Alert variant="danger">{err}</Alert>}
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="signin-username" className="form-label text-default">Email</Form.Label>
                                                    <Form.Control size="lg"
                                                        className=""
                                                        placeholder="Enter your email"
                                                        name="email"
                                                        type='text'
                                                        value={data.email}
                                                        onChange={changeHandler}
                                                        required
                                                    />
                                                </Col>
                                                <Col xl={12} className="mb-2">
                                                    <Form.Label htmlFor="signin-password" className="form-label text-default d-block">Password
                                                    <InputGroup>
                                                        <Form.Control size="lg"
                                                            className="form-control"
                                                            placeholder="Enter your password"
                                                            name="password"
                                                            type={(passwordshow1) ? 'text' : "password"} 
                                                            value={data.password}
                                                            onChange={changeHandler}
                                                            onKeyDown={handleKeyDown}
                                                            required
                                                        />
                                                        <Button variant='light' className="btn btn-light" type="button" onClick={()=>setpasswordshow1(!passwordshow1)}
                                                            id="button-addon2"><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} aria-hidden="true"></i></Button>
                                                    </InputGroup>
                                                        <Link to="#" className="float-end text-danger">Forgot your passowrd?</Link></Form.Label>
                                                </Col>
                                                <Col xl={12} className="d-grid mt-2">
                                                    <Button variant='primary' onClick={sigin} size='lg' className="btn">Sign In</Button>
                                                </Col>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card>
                        </Tab.Container>
                    </Col>
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state: any) => ({
    local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Login);

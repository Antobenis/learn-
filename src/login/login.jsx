import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const [showDangerAlert, setshowDangerAlert] = useState(false);
    const [showSuccessAlert, setshowSuccessAlert] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://reqres.in/api/login', data
        )
            .then(function (response) {
                console.log(response);
                setshowSuccessAlert(true)
            })
            .catch(function (error) {
                console.log(error, 'errer');
                setshowDangerAlert(true)
            });
    }


    setTimeout(() => {
        setshowSuccessAlert(false);
        setshowDangerAlert(false)
    }, 5000);
    const handleChange = (e) => {
        setData((datas) => ({
            ...datas,
            [e.target.name]: e.target.value
        })
        )
    }
    return (
        <>
            <div className="login-page">
                <Alert
                    show={showDangerAlert}
                    variant="danger"
                    className="w-25 mt-3 ml-3  alert-heading"
                >
                    <strong>Failed?</strong>

                </Alert>
                <Alert
                    show={showSuccessAlert}
                    variant="success"
                    className="w-25 mt-3 ml-3 "
                >
                    <strong>Success!</strong>

                </Alert>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={handleChange}
                            name='email'
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={handleChange}
                            name='password'
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>

        </>
    )
}
export default Login;
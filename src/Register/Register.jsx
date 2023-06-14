import axios from 'axios';
import { Alert } from 'bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
const Register = () => {
    const [inputData, setInuptData] = useState({
        email:'',
        password:''
    })
    // const [successAlert, setSuccessAlert] = useState(false)
    // const [dangerAlert, setdangerAlert] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://reqres.in/api/register', inputData)
            .then(function (response) {
                console.log(response);
                // setSuccessAlert(true)
            })
            .catch(function (error) {
                console.log(error);
                // setdangerAlert(true)
            })
    }
    const handleChange = (e) => {
        setInuptData((datas) => ({
            ...datas,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <>
            <div className="login-page">
                {/* <Alert
                    show={dangerAlert}
                    variant="danger"
                    className=" mt-3 ml-3 "
                >
                    <strong>Register Failed</strong>
                </Alert>
                <Alert
                    show={successAlert}
                    variant="success"
                    className="w-25 mt-3 ml-3 "
                >
                    <strong>Sucessfully Registered</strong>
                </Alert> */}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            onChange={handleChange} name='email'
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            onChange={handleChange} name='password'
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Age</Form.Label>
                        <Form.Control placeholder="Age" type="number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control placeholder="Full Name" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
            </div>
        </>
    )
}
export default Register;
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Update = () => {
    const { id } = useParams()
    const [show, setShow] = useState(false);
    const [info, setInfo] = useState(null)
    const [inuptfield, setInputField] = useState('')
    // console.log(inuptfield, 'input')
    const handleClose = () => setShow(false);
      const handleShow = () => setShow(true)
    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`)
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                setInfo(response?.data?.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    const handleChange = (e) => {
        setInputField((datas) => ({
            ...datas,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`https://reqres.in/api/users/${id}`, inuptfield)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }
    useEffect(() => {
        if (info) {
            setInputField({
                email: info && info.email,
                password: info && info.password
            })
        }
    }, [info])
    return (
        <>
            <Button variant="primary" onClick={handleShow} onSubmit={handleSubmit}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                defaultValue={info && info.first_name}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                defaultValue={info && info.last_name}

                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                defaultValue={info && info.email}
                                onChange={handleChange}
                                name='email'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                defaultValue="1234556"
                                onChange={handleChange}
                                name='password'
                            />
                        </Form.Group>
                        <img src={info && info.avatar} />
                        <Button variant="secondary" onClick={handleClose} className="justify-content-center">
                            Cancel
                        </Button>
                        <Button variant="primary" type='submit' onClick={handleClose}>
                            Update
                        </Button>
                    </Form>
                </Modal.Body>

            </Modal>

        </>
    )
}
export default Update
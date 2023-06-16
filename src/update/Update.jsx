import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Update = () => {
    const { id } = useParams()
    const [inuptfield, setInputField] = useState('')
    const [info, setInfo] = useState(null)
    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showDangerAlert, setshowDangerAlert] = useState(false);
    const [showSuccessAlert, setshowSuccessAlert] = useState(false);
    // console.log(inuptfield, 'input')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    const handleShowDelete = () => setShowDelete(true)
    const handleCloseDelete = () => setShowDelete(false);
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
                setshowSuccessAlert(true)

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
    const deletes = (data) => {
        axios.delete(`https://reqres.in/api/users${data}`)
            .then(res => {
                console.log(res);
                setshowDangerAlert(true)
            });
    }
    setTimeout(() => {
        setshowSuccessAlert(false);
        setshowDangerAlert(false)
    }, 5000);
    return (
        <>
            <Container fluid >

                <div className="main-box">
                    <div className="wrapper">
                        <div className="banner-image mb-2"><img src={info?.avatar} /> </div>
                        <h1> {info && info.first_name} {info && info.last_name}</h1>
                        <p>{info && info.email}
                        </p>
                    </div>
                    <div className="button-wrapper">
                        <Button variant="primary" onClick={handleShow} className=' btns fill'>
                            Edit
                        </Button>
                        <Button variant="primary" className="btns outline" onClick={handleShowDelete}>
                            Delete
                        </Button>
                    </div>
                </div>
                {/* <Button variant="primary" onClick={handleShow}>
                    Edit
                </Button> */}

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
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" type='submit' onClick={handleClose}>
                                Update
                            </Button>
                        </Form>
                    </Modal.Body>

                </Modal>
                <Alert
                    show={showDangerAlert}
                    variant="danger"
                    className="w-25 mt-3 ml-3  alert-heading"
                >
                    <strong>Deleted</strong>

                </Alert>
                <Alert
                    show={showSuccessAlert}
                    variant="success"
                    className="w-25 mt-3 ml-3 "
                >
                    <strong>Your Update has been Added !</strong>

                </Alert>


                <Modal show={showDelete} onHide={handleCloseDelete} className='delete-model '>
                    <Modal.Header >
                        <Modal.Title>Warning !</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> Are You Sure ?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseDelete}>
                            Cancel
                        </Button>
                        <Button onClick={() => { deletes(info && info.id); handleCloseDelete() }} className='btn-danger'>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container >

        </>
    )
}
export default Update
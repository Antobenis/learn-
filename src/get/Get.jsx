import axios from 'axios';
import { useEffect, useState } from 'react';
import * as api from '../update/Update'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Update from '../update/Update';
const Get = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                setData(response?.data?.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>image</th>
                    </tr>
                </thead>
                <tbody>

                    {data && data?.map((datas) => (
                        <tr key={datas.id}>
                            <td>{datas.id}</td>
                            <td>{datas.first_name}</td>
                            <td>{datas.last_name}</td>
                            <td>{datas.email}</td>
                            <td><img src={datas.avatar} height={50} /></td>
                            <td><Link to={`/update/${datas && datas.id}`} className='btn btn-primary'>View</Link></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}
export default Get;
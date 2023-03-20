import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Emplist() {
    const [employee, setEmployee] = useState('');
    useEffect(() => {
        fetch('http://localhost:8000/employee').then((response) => {
            return (
                response.json()
            )
        }).then((response) => {
            setEmployee(response);
            // console.log(employee);
        }).catch((error) => {
            // console.log(error.message)
        })

    }, []);
    const navigate= useNavigate()
    const Removefun = (id) => {
        if(window.confirm('Are you sure you want to remove this')){
            fetch('http://localhost:8000/employee/'+id,{
                method: 'DELETE',
              }).then((response) =>{
              alert('Delete successefully');
              navigate('/');
              }).catch((error) => {
                console.log(error);
              });
            }
        window.location.reload();
        }
    const Editfun = (id) => {
        console.log(id);
        navigate('/employee/edit/'+id);
        
    }
    const Detailfun = (id) => {
        // console.log(id);
        navigate('/employee/detail/'+id);

    }

    return (
        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h2>Emplist</h2>
                </div>
                <div className='card-body'>
                    <Link to='employee/create' className='btn btn-success add'>Add (+)</Link>
                    <table className="table">
                        <thead className='bg-dark text-white'>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>{employee &&employee.map(i =>(
                                    <tr key={i.id}>
                                        <th scope="row">{i.id}</th>
                                        <td>{i.name}</td>
                                        <td>{i.email}</td>
                                        <td>{i.phone}</td>
                                        <td className=''><a  onClick={()=>{Editfun(i.id) }} className='btn btn-primary '>edit</a>
                                        <a  onClick={()=>{Removefun(i.id) }} className='btn btn-danger'>delete</a>
                                        <a onClick={()=>{Detailfun(i.id) }} className='btn btn-success'>details</a></td>
                                    </tr>
                                ))}</tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Emplist
import React,{useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom';

const Empdetail = () => {
  const {empid}=useParams()
  const [employee, setEmployee] = useState({});
    useEffect(() => {
        fetch('http://localhost:8000/employee/'+empid).then((response) => {
            return (
                response.json()
            )
        }).then((response) => {
            setEmployee(response);
            // console.log(employee);
        }).catch((error) => {
            console.log(error.message)
        })

    }, []);
  return (
     
    <div className="card">
  <div className="card-header">
  Name: {employee&&employee.name}
  </div>
  <div className="card-body">
    <h5 className="card-title">Email: {employee&&employee.email}</h5>
    <p className="card-text">Phone: {employee&&employee.phone}</p>
    <Link to='/' className="btn btn-primary">Go Home</Link>
  </div>
</div>
    
  )
}

export default Empdetail;
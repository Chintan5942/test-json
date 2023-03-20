import React, { useEffect, useState } from 'react'
import { useNavigate, useParams,Link } from 'react-router-dom';

const Empedit = () => {
  const {empid}=useParams()
  const [employeeEdit, setEmployeeEdit] = useState({});
    useEffect(() => {
        fetch('http://localhost:8000/employee/'+empid).then((response) => {
            return (
                response.json()
            )
        }).then((response) => {
          idchange(response.id);
          namechange(response.name);
          emailchange(response.email);
          phonechange(response.phone);
          activechange(response.active);
            // console.log(employee);
        }).catch((error) => {
            console.log(error.message)
        })

    }, []);
    const [id, idchange] = useState('');
  const [name, namechange] = useState('');
  const [email, emailchange] = useState('');
  const [phone, phonechange] = useState('');
  const [active, activechange] = useState("");
  const [validation, valchange] = useState(false);
  const navigate= useNavigate()
  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata={id,name,email,phone,active};
    // console.log(id);
    fetch('http://localhost:8000/employee/'+empid,{
      method: 'PATCH',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(empdata)
    }).then((response) =>{
    alert('data edit successefully');
    navigate('/');
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>

            <div className="card" style={{ "textAlign": "left" }}>
              <div className="card-title "style={{ "textAlign": "center" }}>
                <h2>Employee Edit</h2>
              </div>
              <div className="card-body">

                <div className="row">

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input value={id} disabled="disabled" className="form-control"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input required value={name} onMouseDown={e => valchange(true)} onChange={e => namechange(e.target.value)} className="form-control"></input>
                      {name.length == 0 && validation && <span className="text-danger">Enter the name</span>}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-check">
                      <input checked={active} onChange={e => activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                      <label className="form-check-label">Is Active</label>

                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">Save</button>
                      <Link to="/" className="btn btn-danger">Back</Link>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default Empedit
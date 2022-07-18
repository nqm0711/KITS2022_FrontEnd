import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserEdit = () => {
  const params = useParams();
  const [student, setStudent] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {

    let url =
      'https://62b0495de460b79df0422035.mockapi.io/students/' + params.id;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setStudent(data);
      });
  }, []);

  const changeData=(field)=>{
    let data = { ...student };
    data.field = field;
    setStudent(data);
  }

  const setFirstName = (firstName) => {
    changeData(firstName)
  };

    const setLastName = (lastName) => {
    changeData(lastName)
  };

    const setEmail = (email) => {
    changeData(email)
  };

    const setHome = (address,city,country) => {
    let data = { ...student };
    data.home.address = address;
    data.home.city = city;
    data.home.country = country;
    setStudent(data);
  };


  const saveUser = () => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    };
    fetch(
      'https://62b0495de460b79df0422035.mockapi.io/students/' + student.id,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
      navigate(-1);
  };

  return (
    <>
      {student != null ? (
        <div class="container bootstrap snippets bootdey">
          <div class="panel-body inf-content">
            <div class="row">
              <div class="col-md-6">
                <strong>EDIT Your Information</strong>
                <br />
                <div class="table-responsive">
                  <table class="table table-user-information">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Your Identificacion</strong>
                        </td>
                        <td class="text-primary">{student.id}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>First Name</strong>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={student.firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Lastname</strong>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={student.lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Email</strong>
                        </td>
                        <td>
                          <input
                            type="email"
                            className="form-control"
                            value={student.email}
                            onChange={(e) => setEmail(e.target.value)}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Home address</strong>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={student.home.address}
                            onChange={(e) => setHome(e.target.value,student.home.city,student.home.country)}
                          ></input>
                          <input
                            type="text"
                            className="form-control"
                            value={student.home.address}
                            onChange={(e) => setHome(student.home.address,e.target.value,student.home.country)}
                          ></input>
                          <input
                            type="text"
                            className="form-control"
                            value={student.home.address}
                            onChange={(e) => setHome(student.home.address,student.home.city,e.target.value)}
                          ></input>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Picture</strong>
                        </td>
                        <td class="text-primary">
                          <img src={student.picture} className="img-circle" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div>
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => saveUser()}
                    >
                      Save
                    </button>
                    <span> </span>
                    <Link to="/">
                      <button type="button" class="btn btn-secondary">
                        Cancel
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        'loading'
      )}
    </>
  );
};

export default UserEdit;

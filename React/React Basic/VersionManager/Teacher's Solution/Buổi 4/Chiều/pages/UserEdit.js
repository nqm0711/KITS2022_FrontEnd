import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';
/*import { useNavigate } from 'react-router-dom';*/
import { useState,useEffect } from 'react';
/*import { useEffect } from 'react';*/
import { Link } from 'react-router-dom';
import DateObject from "react-date-object";

const UserEdit = () => {
  const params = useParams();
  const [student, setStudent] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    console.log('user use effect!!');

    let url =
      'https://62b0495de460b79df0422035.mockapi.io/students/' + params.id;

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //change date
        var date = new Date(data.dob);
        data.dob = date.toISOString().slice(0, 10);
        console.log(data.dob);
        setStudent(data); //setStudents(data)
      });
  }, []);

  const handleChange = (event) => {
    console.log(event);
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(name);
    let data = { ...student };
    data[name] = value;

    if (name == 'gender') {
      data[name] = str2bool(value);
      console.log('gender');
      console.log(data[name]);
    }

    console.log(data);
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
      .then((data) => {
        var date = new Date(data.dob);
        data.dob = date.getTime();

        console.log(data);
        navigate(-1);
      });
  };

  var str2bool = (value) => {
    if (value && typeof value === 'string') {
      if (value.toLowerCase() === 'true') return true;
      if (value.toLowerCase() === 'false') return false;
    }
    return value;
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
                            name="firstName"
                            onChange={(e) => handleChange(e)}
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
                            name="lastName"
                            onChange={(e) => handleChange(e)}
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
                            name="email"
                            onChange={(e) => handleChange(e)}
                          ></input>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Home address</strong>
                        </td>
                        <td class="text-primary">
                          {student.home.address}
                          <p />
                          {student.home.city}
                          <p />
                          {student.home.country}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={student.home.address}
                            name="home.address"
                            onChange={(e) => handleChange(e)}
                          ></input>
                          <input
                            type="text"
                            className="form-control"
                            value={student.home.city}
                            name="home.city"
                            onChange={(e) => handleChange(e)}
                          ></input>
                          <input
                            type="text"
                            className="form-control"
                            value={student.home.country}
                            name="home.country"
                            onChange={(e) => handleChange(e)}
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

                      <tr>
                        <td>
                          <strong>Date Of Birth</strong>
                        </td>
                        <td>
                          <input
                            type="date"
                            id="birthday"
                            name="dob"
                            value={student.dob}
                            onChange={(e) => handleChange(e)}
                          ></input>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Bio</strong>
                        </td>
                        <td>
                          <textarea
                            type="text"
                            name="bio"
                            className="form-control"
                            value={student.bio}
                            onChange={(e) => handleChange(e)}
                          ></textarea>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Gender</strong>
                        </td>
                        <td>
                          <div>
                            <input
                              type="radio"
                              value="false"
                              checked={student.gender == false}
                              name="gender"
                              onChange={(e) => {
                                handleChange(e);
                              }}
                            />
                            Male
                            <input
                              type="radio"
                              value="true"
                              checked={student.gender == true}
                              name="gender"
                              onChange={(e) => {
                                handleChange(e);
                              }}
                            />
                            Female
                          </div>
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

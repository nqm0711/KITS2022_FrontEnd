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

  const dateReform=(number)=>{
  var date = new DateObject(number);
  return date.format("YYYY-MM-DD");
  }

  const genderReform=(boolean)=>{
  return boolean?"Male":"Female";
  }

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

  const str2bool = (value) => {
    if (value && typeof value === 'string') {
      if (value.toLowerCase() === 'true') return true;
      if (value.toLowerCase() === 'false') return false;
    }
    return value;
  };


  const changeData=(name,value)=>{
    let data = { ...student };
    if (name == 'gender') {
      data[name] = str2bool(value);
    }
    data[name] = value;
    setStudent(data);
  }

/*  const changeData=(field)=>{
    let data = { ...student };
    data.field = field;
    setStudent(data);
  }*/

/*  const setFirstName = (firstName) => {
    changeData(firstName)
  };*/

/*    const setLastName = (lastName) => {
    changeData(lastName)
  };*/

/*    const setEmail = (email) => {
    changeData(email)
  };*/

    const setHome = (address,city,country) => {
    let data = { ...student };
    data.home.address = address;
    data.home.city = city;
    data.home.country = country;
    setStudent(data);
  };

/*    const setDOB = (dob) => {
    changeData(dob)
  };*/

/*    const setGender = (gender) => {
    changeData(gender)
  };*/

/*    const setBio = (bio) => {
    changeData(bio)
  };*/

/*    const setPicture = (picture) => {
    changeData(picture)
  };*/


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
        <div className="container bootstrap snippets bootdey">
          <div className="panel-body inf-content">
            <div className="row">
              <div className="col-md-6">
                <strong>EDIT Your Information</strong>
                <br />
                <div className="table-responsive">
                  <table className="table table-user-information">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Your Identificacion</strong>
                        </td>
                        <td className="text-primary">{student.id}</td>
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
                            onChange={(e) => changeData("firstName",e.target.value)}
                          />
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
                            onChange={(e) => changeData("lastName",e.target.value)}
                          />
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
                            onChange={(e) => changeData("email",e.target.value)}
                          />
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
                          />
                          <input
                            type="text"
                            className="form-control"
                            value={student.home.city}
                            onChange={(e) => setHome(student.home.address,e.target.value,student.home.country)}
                          />
                          <input
                            type="text"
                            className="form-control"
                            value={student.home.country}
                            onChange={(e) => setHome(student.home.address,student.home.city,e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Date of Birth</strong>
                        </td>
                        <td>
                          <input
                              type="date"
                              className="form-control"
                              value={dateReform(student.dob)}
                              onChange={(e) => changeData(e.target.value)}
                            />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>gender</strong>
                        </td>
                        <td>
                          <div>
                          <input
                              type="radio"
                              name="gender"
                              value="true"
                              checked={student.gender == false}
                              onChange={(e) => changeData("gender",e.target.value)}
                            />Male
                            <input
                              type="radio"
                              name="gender"
                              value="false"
                              checked={student.gender == false}
                              onChange={(e) => changeData("gender",e.target.value)}
                            />Female
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Bio</strong>
                        </td>
                        <td>
                        <textarea className="form-control" row="2"
                              name="bio"
                              value={student.bio}
                              onChange={(e) => changeData("bio",e.target.value)}>
                        </textarea>
                        </td>
                      </tr>
                      {/*<tr>
                        <td>
                          <strong>Picture</strong>
                        </td>
                        <td>
                          <input type="file" className="form-control" value={student.picture} onChange={(e) => changeData(e.target.value)}/>
                        </td>
                      </tr>*/}
                    </tbody>
                  </table>
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => saveUser()}
                    >
                      Save
                    </button>
                    <span> </span>
                    <Link to="/">
                      <button type="button" className="btn btn-secondary">
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

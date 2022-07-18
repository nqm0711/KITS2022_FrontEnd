import React from 'react';
import DateObject from "react-date-object";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
const User = () => {
  const params = useParams();
  const [student, setStudent] = useState(null);

  const dateReform=(number)=>{
  var date = new DateObject(number);
  return date.format("DD-MM-YYYY");
  }

  const genderReform=(boolean)=>{
  return boolean?"Male":"Female";
  }

  useEffect(() => {

    let url =
      'https://62b0495de460b79df0422035.mockapi.io/student/' + params.id;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setStudent(data);
      });
  }, []);

  return (
    <>
      {student != null ? (
        <div className="container bootstrap snippets bootdey">
          <div className="panel-body inf-content">
            <div className="row">
              <div className="col-md-6">
                <strong>Information</strong>
                <br />
                <div className="table-responsive">
                  <table className="table table-user-information">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Identificacion</strong>
                        </td>
                        <td className="text-primary">{student.id}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>First Name</strong>
                        </td>
                        <td className="text-primary">{student.firstName}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Lastname</strong>
                        </td>
                        <td className="text-primary">{student.lastName}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Email</strong>
                        </td>
                        <td className="text-primary">{student.email}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Home address</strong>
                        </td>
                        <td className="text-primary">
                          {student.home.address}
                          <p />
                          {student.home.city}
                          <p />
                          {student.home.country}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Date of Birth</strong>
                        </td>
                        <td className="text-primary">{dateReform(student.dob)}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>gender</strong>
                        </td>
                        <td className="text-primary">{genderReform(student.gender)}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Bio</strong>
                        </td>
                        <td className="text-primary">{student.bio}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Picture</strong>
                        </td>
                        <td className="text-primary">
                          <img src={student.picture} width="200px" height="200px" className="img-circle" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
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

export default User;

import React, { Component,useRef,useState,useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import Sdata from '../data/Sdata.json';


const User = (student) => {
const params = useParams();
const students = student.data
console.log(students)
return (Detail)
};

const userDetail=(student)=>{
    <>
      {student != null ? 
        <div className="container bootstrap snippets bootdey">
          <div className="panel-body inf-content">
            <div className="row">
              <div className="col-md-6 my-5">
                <h1><strong>Student Information</strong></h1>
                <br />
                <div className="table-responsive">
                  <table className="table table-user-information my-5">
                    <tbody>
                        <tr>
                            <td>
                              <strong>Student ID</strong>
                            </td>
                            <td className="text-primary">{student.id}</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Full Name</strong>
                            </td>
                            <td className="text-primary">{student.name}</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Age</strong>
                            </td>
                            <td className="text-primary">{student.age}</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Email</strong>
                            </td>
                            <td className="text-primary">{student.email}</td>
                        </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
       : 
        'Data not found'
      }
    </>
    }

export default User;
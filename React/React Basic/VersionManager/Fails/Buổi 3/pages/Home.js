import React, { Component,useRef,useState,useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentTable from '../components/StudentTable';
import Sdata from '../data/Sdata.json';
import StudentNameAgeEmailMark from '../data/StudentNameAgeEmailMark.json'

function Home() {
  const studentsData=Sdata;

  const [searchTerm,setTerm]=useState("");

  const [students,setData]=useState(studentsData);

  const searchStudent=(searchTerm)=>{
    let name=null;
    if(searchTerm.length>0){
    name=studentsData.filter((student) =>
    { let name=student.name.toLowerCase();
      return name.indexOf(searchTerm.toLowerCase())!==-1;
    });
    } else {name=studentsData};
    setData(name);
  };

  return (
    <div className="ms-3 col-md-12 col-sm-12 justify-content-center">
      <h2>Students list</h2>
      <div className="row my-3">
        <div className="col-sm-6">
          <div className="input-group">
            <input type="text" className="form-control" onChange={(input)=>setTerm(input.target.value)} onKeyPress={(input)=>{if(input.key==='Enter'){searchStudent(searchTerm)}}}></input>
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button" onClick={() => searchStudent(searchTerm)}>
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    <StudentTable data={students} />
    </div>
    );
  }

  export default Home;
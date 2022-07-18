import React, { Component,useRef,useState,useEffect } from 'react';
import '../css/App.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from "react-router-dom";
import User from '../pages/User';

function StudentTable(student) 
{
  const [filteredList,setData]=useState(student.data);

  const [searchTerm,setTerm]=useState("");

  const [studentData,sortStudentData]=useState(student.data);

  const searchStudent=(searchTerm)=>{
    let name=null;
    if(searchTerm.length>0){
      name=filteredList.filter((student) =>
        { let name=student.name.toLowerCase();
          return name.indexOf(searchTerm.toLowerCase())!==-1;
        });
      } else {name=student.data};
      setData(name);
        sortStudentData(name);
  };

  const reset=()=>{setData(student.data);sortStudentData(student.data)}

  const studentNew = [...studentData];

  function studentDetail(detail){return <User data={detail}/>}

  const SortStudentTable=(field,type,direction)=>{
    if(type=="number"){
      studentNew.sort((a, b)=>direction*(a[field]-b[field]))} 
    else if(type=="string"){studentNew.sort((a, b)=>direction*(a[field].localeCompare(b[field])))}
    sortStudentData(studentNew);
  }

  const list=studentData.map((item)=><tr key={item.id} className={item.mark>9?"table-success":(item.mark>=8?"table-primary":(item.mark>=6?"table-warning":"table-danger"))}><td>{item.name}</td><td>{item.age}</td><td>{item.email}</td><td>{item.mark}</td><td><<Link to="User/{item.id}">}><User data={item}/></Link></td></tr>);

  return ( 
  <div className="ms-5 col-md-11 col-sm-11 justify-content-center">
    <div className="row my-3 ">
        <div className="col-sm-12">
          <div className="input-group">
            <input type="text" className="form-control" onChange={(input)=>{input.target.value.length>0?setTerm(input.target.value):reset()}} onKeyPress={(input)=>{if(input.key==='Enter'){searchStudent(searchTerm)}}}></input>
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button" onClick={() => searchStudent(searchTerm)}>
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    <Table bordered hover>
      <thead>
        <tr className="table-dark">
          <th className="col-md-3 col-sm-4 col-xs-4">
            <div className="container">
              Full Name
              <button type="button" className="btn btn-primary" onClick={()=>{SortStudentTable("name","string",1)}}>&#8593;</button>
              <button type="button" className="btn btn-primary" onClick={()=>{SortStudentTable("name","string",-1)}}>&#8595;</button>
            </div>
          </th>
          <th className="col-md-3 col-sm-2 col-xs-2">
            <div className="container">
              Age
              <button type="button" className="btn btn-primary" onClick={()=>{SortStudentTable("age","number",1)}}>&#8593;</button>
              <button type="button" className="btn btn-primary" onClick={()=>{SortStudentTable("age","number",-1)}}>&#8595;</button>
            </div>
          </th>
          <th className="col-md-3 col-sm-4 col-xs-4">
            <div className="container">
              Email
              <button type="button" className="btn btn-primary" onClick={()=>{SortStudentTable("email","string",1)}}>&#8593;</button>
              <button type="button" className="btn btn-primary" onClick={()=>{SortStudentTable("email","string",-1)}}>&#8595;</button>
            </div>
          </th>
          <th className="col-md-3 col-sm-2 col-xs-2">
            <div className="container">
              Mark
              <button type="button" className="btn btn-primary" onClick={()=>{SortStudentTable("mark","number",1)}}>&#8593;</button>
              <button type="button" className="btn btn-primary" onClick={()=>{SortStudentTable("mark","number",-1)}}>&#8595;</button>
            </div>
          </th>
          <th className="col-md-3 col-sm-2 col-xs-2">
            <div className="container">
              Detail
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {list}
      </tbody>
    </Table>
  </div>
  );
}

export default StudentTable;
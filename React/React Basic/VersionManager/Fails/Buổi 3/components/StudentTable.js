import React, { Component,useRef,useState,useEffect } from 'react';
import '../css/App.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function StudentTable(student) 
{

const [studentData,sortStudentData]=useState(student.data);
const studentNew = [...student.data];


const SortStudentTable=(field,type,direction)=>{
  if(type=="number"){
    studentNew.sort((a, b)=>direction*(a[field]-b[field]))} 
  else if(type=="string"){studentNew.sort((a, b)=>direction*(a[field].localeCompare(b[field])))}
  sortStudentData(studentNew);
}

const list=studentData.map((item)=><tr key={item.id} className={item.mark>9?"table-success":(item.mark>=8?"table-primary":(item.mark>=6?"table-warning":"table-danger"))}><td>{item.name}</td><td>{item.age}</td><td>{item.email}</td><td>{item.mark}</td></tr>);

  return ( 
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
              </tr>
            </thead>
            <tbody>
              {list}
            </tbody>
          </Table>
        );
}

export default StudentTable;
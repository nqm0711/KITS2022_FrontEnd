import React, { Component,useRef,useState,useEffect } from 'react';
import '../css/App.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function StudentTable(student) 
{

const [studentData,sortStudentData]=useState(student.data);

/*useEffect(()=>{sortStudentData(student.data)},[student.data]);*/

const sortNameAsc=()=>{
  var nameAsc = [...student.data];
  nameAsc.sort((a, b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  sortStudentData(nameAsc);
}

const sortNameDes=()=>{
  var nameDes = [...student.data];
  nameDes.sort((a, b)=>b.name.toLowerCase().localeCompare(a.name.toLowerCase()));
  sortStudentData(nameDes);
}

const list=studentData.map((item)=><tr className={item.mark>9?"table-success":(item.mark>=8?"table-primary":(item.mark>=6?"table-warning":"table-danger"))}><td>{item.name}</td><td>{item.age}</td><td>{item.email}</td><td>{item.mark}</td></tr>);

/*student.data.sort((a, b)=>{if (a.mark<b.mark){return 2;;}else if (a.mark>b.mark){return -2;}else if (a.mark=b.mark){if(a.name<b.name){return -1;}else if(a.name>b.name){return 1;}else {return 0};}});*/

  return ( 
          <Table bordered hover>
            <thead>
              <tr className="table-dark">
                <th className="col-md-6 col-sm-6">
                    <div className="container">
                      Full Name
                        <button type="button" className="btn btn-primary" onClick={()=>{sortNameAsc()}}>&#8593;</button>
                        <button type="button" className="btn btn-primary" onClick={()=>{sortNameDes()}}>&#8595;</button>
                    </div>
                </th>
                <th>Age</th>
                <th>Email</th>
                <th>Mark</th>
              </tr>
            </thead>
            <tbody>
              {list}
            </tbody>
          </Table>
        );
}

export default StudentTable;
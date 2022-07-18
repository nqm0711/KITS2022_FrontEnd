import React, { Component,useRef,useState,useEffect } from 'react';
import './css/App.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Car from './components/Car';
import StudentTable from './components/StudentTable';
import Sdata from './data/Sdata.json';
import StudentNameAgeEmailMark from './data/StudentNameAgeEmailMark.json'

<script>var Alert = ReactBootstrap.Alert;</script>

function App() {
  const studentsData=Sdata;
  
  /* Comments
    for (var i = 0; i < studentsData.length; i++) {
      if (studentsData[i].mark>9){studentsData[i].style="table-success";}
      else if (studentsData[i].mark>=8){studentsData[i].style="table-primary";}
      else if (studentsData[i].mark>=6){studentsData[i].style="table-warning";}
      else{studentsData[i].style="table-danger";}}*/


 
    /*const students=studentsData.sort((a, b)=>{let Namea = a.name.toLowerCase(),Nameb = b.name.toLowerCase();if (Namea < Nameb) {return -1;} else if (Namea > Nameb) {return 1;} else return 0;});*/
    
    /*const students=studentsData.sort((a, b)=>{if (a.name < b.name) {return -1;} else if (a.name > b.name) {return 1;} else return 0;});*/
    
    /*const students=studentsData.sort((a, b)=>b.mark - a.mark);*/

    /*const students=studentsData.sort((a, b)=>{if (a.mark<b.mark){return 2;;}else if (a.mark>b.mark){return -2;}else if (a.mark=b.mark){if(a.name<b.name){return -1;}else if(a.name>b.name){return 1;}else {return 0};}});*/


    /*const list=students.map((item)=><tr className={item.style}><td>{item.name}</td><td>{item.age}</td><td>{item.city}</td><td>{item.mark}</td></tr>);*/

    /*const list=studentsData.map((item)=><tr className={item.mark>=9 ? "table-success" : (item.mark>7 ? "table-warning" : "table-danger") }><td>{item.name}</td><td>{item.age}</td><td>{item.city}</td><td>{item.mark}</td></tr>);*/
    

  

    /*var list=""
    for (var i = 0; i <= studentsData.length; i++) {
      list+=(<tr><td>{studentsData[i].name}</td><td>{studentsData[i].age}</td><td>{studentsData[i].city}</td></tr>);
    }*/

    /*var list=""
    for (var i = 0; i <= studentsData.length; i++) {
      list=list.concat(<tr><td>,{studentsData[i].name},</td><td>,{studentsData[i].age},</td><td>,{studentsData[i].city},</td></tr>);
    }*/

    /*var list=""
    for (var i = 0; i < studentsData.length; i++) {
      list=list+("<tr><td>"+studentsData[i].name+"</td><td>"+studentsData[i].age+"</td><td>"+studentsData[i].city+"</td></tr>");
    }*/
    /*const list=[];
    for (var i = 0; i < studentsData.length; i++) {
      list.push((<tr><td>{studentsData[i].name}</td><td>{studentsData[i].age}</td><td>{studentsData[i].city}</td></tr>));
    }*/

   /* <Table bordered hover>
          <thead>
            <tr className="table-dark">
              <th>Full Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Mark</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </Table>*/



  const [searchTerm,setTerm]=useState("");
  const [students,setData]=useState(studentsData);

/*  useEffect(()=>{
    let url="https://62b0495de460b79df0422035.mockapi.io/students";
    if(searchTerm.length>0){

      url=url+"?search="+searchTerm;
    }

    fetch(url)
    .then(response=>response.json())
    .then(data=>{setData(data);})},[searchTerm])*/



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
    <div className="ms-3 col-6 justify-content-center">
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

  export default App;
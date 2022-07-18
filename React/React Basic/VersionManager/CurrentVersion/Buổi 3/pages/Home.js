import React, { Component,useRef,useState,useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentTable from '../components/StudentTable';
import Sdata from '../data/Sdata.json';
import StudentNameAgeEmailMark from '../data/StudentNameAgeEmailMark.json'

<script>var Alert = ReactBootstrap.Alert;</script>

function Home() {

const studentsData=Sdata;

  return (
    <>
    <h1 className="ms-auto text-center">Students List</h1>
    <StudentTable data={studentsData} />
    </>
  );}

  export default Home;
import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function StudentTable(props) {
  const [students, setStudents] = useState(null);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    setStudents(props.data);
  }, [props.data]);

  const sortColumn = (field, type) => {
    const sortData = [...students]; //tạo mới dữ liệu để state trỏ đến dữ liệu mới
    //const sortData = students;
    if (type == 'string') {
      sortData.sort((a, b) => direction * a[field].localeCompare(b[field]));
    } else if (type == 'number') {
      sortData.sort((a, b) => direction * (a[field] - b[field]));
    }
    setDirection(direction * -1);
    setStudents(sortData);
  };

  const deleteUser = (id) => {
    fetch('https://62b0495de460b79df0422035.mockapi.io/students' + id, {
      method: 'DELETE',
    }).then(() => {
      let result = [...students];
      result = result.filter((item) => {
        return item.id != id;
      });
      setStudents(result);
    });
  };

  var student_list = [];
  if (students != null) {
    student_list = students.map((item) => (
      <tr
        key={item.id}
        className={
          item.mark>90?"table-success"
          :(item.mark>=80?"table-primary"
            :(item.mark>=60
              ?"table-warning"
              :"table-danger"))
        }
      >
        <td>{item.id}</td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.email}</td>
        <td>{item.mark}</td>
        <td>
          <Link to={'/user/' + item.id}>Details</Link>
        </td>
        <td>
          <Link to={'/useredit/' + item.id}>
            <button type="button" className="btn btn-primary">
              Edit
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteUser(item.id)}
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    ));
  }

  return (
    <table className="table table-hover">
    <thead>
      <tr>
        <th>ID</th>
        <th onClick={() => sortColumn('firstName', 'string')}>First Name</th>

        <th onClick={() => sortColumn('lastName', 'string')}>
          Last Name <span> </span>
        </th>
        <th>Email</th>
        <th onClick={() => sortColumn('mark', 'number')}>Mark</th>
        <th>Detail</th>
      </tr>
      </thead>
      <tbody>{student_list}</tbody>
    </table>
  );
}

export default StudentTable;

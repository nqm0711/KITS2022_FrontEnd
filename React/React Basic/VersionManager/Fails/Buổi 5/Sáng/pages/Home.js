import React from 'react';
import { Link } from 'react-router-dom';
import StudentTable from '../components/StudentTable';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = 'https://62b0495de460b79df0422035.mockapi.io/student';
    if (searchTerm.length > 0) {
      url = url + '?search=' + searchTerm;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [searchTerm]);

  return (
    <div className="container">
      <h2>Danh sách sinh viên</h2>
      <div className="row">
        <div className="col-sm-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
            <div className="input-group-append">
              <button
                className="btn btn-secondary"
                type="button"
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
            <Link to="/useredit/new" className="ms-5"><button type="button" className="btn btn-primary">Add Student</button></Link>
          </div>
        </div>
      </div>
      <StudentTable data={data} />
    </div>
  );
}

export default App;

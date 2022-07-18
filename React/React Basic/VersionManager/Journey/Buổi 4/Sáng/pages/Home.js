import React from 'react';

import StudentTable from '../components/StudentTable';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = 'https://62b0495de460b79df0422035.mockapi.io/students';
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
      <div class="row">
        <div class="col-sm-6">
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
                // onClick={searchStudent}
              >
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <StudentTable data={data} />
    </div>
  );
}

export default App;

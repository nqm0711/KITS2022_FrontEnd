import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProductTable from '../components/ProductTable';

const Contact = () => {
  const [product, setProduct] = useState(null);
  const [categories, setCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    let url = 'https://62b0495de460b79df0422035.mockapi.io/products/';
    if (searchTerm.length > 0) {
      url = url + '?search=' + searchTerm;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, [searchTerm]);

  return (
    <div>
      <h3 className="text-center">ADMIN ONLY</h3>
      <h1 className="text-center mt-3">PRODUCT MANAGEMENT TABLE</h1>
      <div className="container-fluid col-lg-10 col-md-12 col-sm-12 my-5 mx-auto">
        <div className="col-lg-8 col-md-10 col-sm-12 my-5 mx-auto">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button">
                <i className="fa fa-search"></i>
              </button>
            </div>
            <Link to="/edit/new" className="ms-5">
              <button type="button" className="btn btn-primary">
                Add Product
              </button>
            </Link>
          </div>
        </div>
        <ProductTable data={product} />
      </div>
    </div>
  );
};

export default Contact;

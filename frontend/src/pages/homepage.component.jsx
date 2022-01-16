import { Col, Row } from 'react-bootstrap';

import Product from '../components/product/product.component';
import { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios.get('/api/products');
      setProducts(data);
    };

    fetchProducts();
  }, []);


  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map(product => (
            <Col sm={12} md={6} lg={4} xlg={2} key={product._id} >
              <Product product={product} />
            </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;

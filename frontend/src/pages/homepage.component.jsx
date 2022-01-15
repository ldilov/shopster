import products from '../data/mock/products';
import { Col, Row } from 'react-bootstrap';

import Product from '../components/product/product.component';

const HomePage = () => {
  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map(product => (
            <Col sm={12} md={6} lg={4} xlg={2} >
              <Product product={product} />
            </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;

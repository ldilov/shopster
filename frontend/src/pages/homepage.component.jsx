import { Col, Row } from 'react-bootstrap';

import Product from '../components/product/product.component';

import { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  selectProductListError,
  selectProductListIsLoading,
  selectProductListItems
} from '../redux/product-list/product-list.selectors';
import { fetchProductsStart } from '../redux/product-list/product-list.actions';

const HomePage = ({ fetchAllProducts, products, isLoading, error }) => {
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

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

const mapStateToProps = createStructuredSelector({
  products: selectProductListItems,
  isLoading: selectProductListIsLoading,
  error: selectProductListError
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllProducts: () => dispatch(fetchProductsStart())
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

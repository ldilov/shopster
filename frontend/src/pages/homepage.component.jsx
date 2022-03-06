import { Col, Row } from 'react-bootstrap';

import Message, { TYPES } from '../components/message/message.component';

import { lazy, useEffect, Suspense } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  selectProductListError,
  selectProductListIsLoading,
  selectProductListItems
} from '../redux/product-list/product-list.selectors';
import { fetchProductsStart } from '../redux/product-list/product-list.actions';
import Loader from '../components/loader/loader.component';

// Lazy loaded components
const Product = lazy(() => import('../components/product/product.component'));

const HomePage = ({fetchAllProducts, products, isLoading, error}) => {
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  return (
      <>
        <h1>Latest products</h1>
        {
          isLoading
              ? (
                  <Loader/>
              )
              : (
                  error
                      ? (
                          <Message content={ error } type={ TYPES.DANGER }/>
                      )
                      : (
                          <Row>
                            <Suspense fallback={<Loader />}>
                            { products.map(product => (
                                <Col sm={ 12 } md={ 6 } lg={ 4 } xlg={ 2 } key={ product._id }>
                                  <Product product={ product }/>
                                </Col>
                            )) }
                            </Suspense>
                          </Row>
                      )
              )
        }
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

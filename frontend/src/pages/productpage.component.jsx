import { Link, useParams } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";

import { fetchProductStart } from '../redux/product/product.actions';
import { selectProductData, selectProductError, selectProductLoading } from '../redux/product/product.selectors';
import Loader from '../components/loader/loader.component';
import Message, { TYPES } from '../components/message/message.component';
import Meta from '../components/meta/meta.component';

const ProductDetails = lazy(() => import('../components/product-details/product-details.component'));

const ProductPage = ({ fetchProductData, product, isLoading, error }) => {
  const params = useParams();

  useEffect(() => {
    fetchProductData(params.id)
  }, [params, fetchProductData])


  let result = (
      <>
        <Meta content= {product?.name ?? "Loading"} />
        <Link className="btn btn-secondary my-3" to="/">Go Back</Link>
        <Suspense fallback={<Spinner animation="grow" /> }>
          <ProductDetails product={ product }/>
        </Suspense>
      </>
  );

  if (error) {
    result = ( <Message content={ error } type={ TYPES.DANGER } /> );
  } else if (isLoading || !product) {
    result =  ( <Loader /> );
  }

  return (
      <>
        { result }
      </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchProductData: (id) => dispatch(fetchProductStart(id))
});

const mapStateToProps = createStructuredSelector({
  product: selectProductData,
  isLoading: selectProductLoading,
  error: selectProductError
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);

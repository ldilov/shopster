import { Link, useParams } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

const ProductDetails = lazy(() => import('../components/product-details/product-details.component'));

const ProductPage = ({ fetchProducts, products, isLoading, error }) => {
  const params = useParams();

  const product = {};

  return (
      <>
        <Link className="btn btn-secondary my-3" to="/">Go Back</Link>
        <Suspense fallback={<Spinner animation="grow" /> }>
          <ProductDetails product={ product }/>
        </Suspense>
      </>
  );
};

export default ProductPage;

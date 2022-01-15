import { Link, useParams } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Spinner } from 'react-bootstrap';

import products from '../data/mock/products';

const ProductDetails = lazy(() => import('../components/product-details/product-details.component'));

const ProductPage = () => {
  let params = useParams();
  const product = products.find(p => p._id === params.id);

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

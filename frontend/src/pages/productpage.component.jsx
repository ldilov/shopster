import { Link, useParams } from 'react-router-dom';
import { lazy, Suspense, useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';

const ProductDetails = lazy(() => import('../components/product-details/product-details.component'));

const ProductPage = () => {
  let params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios.get(`/api/products/${params.id}`);
      setProduct(data);
    }

    fetchProducts();
  }, [params]);

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

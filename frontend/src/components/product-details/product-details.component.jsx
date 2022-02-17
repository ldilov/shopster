import { Col, Image, Row, Spinner } from 'react-bootstrap';
import { lazy, Suspense } from 'react';

const ProductDetailsTable = lazy(() => import('../product-details-table/product-details-table.component'));
const ProductDetailsMetadata = lazy(() => import('../product-details-metadata/product-details-metadata.component'));

const ProductDetails = ({product}) => {
  const dataMatrix = [
    ['Price', `$${product.price}`],
    ['Status', `${product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}`]
  ]

  return (
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <Suspense fallback={<Spinner animation="border" />}>
            <ProductDetailsMetadata product={product} />
          </Suspense>
        </Col>
        <Col md={3}>
          <Suspense fallback={<Spinner animation="border" />}>
            <ProductDetailsTable data={dataMatrix} isInStock={product.countInStock < 1} product={product} />
          </Suspense>
        </Col>
      </Row>
  );
};

export default ProductDetails;

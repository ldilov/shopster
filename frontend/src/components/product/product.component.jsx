/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Rating from '../rating/rating.component';

import { imageContainer, productImage } from './product.styles';

const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <div css={imageContainer} >
          <Card.Img src={product.image} variant={'top'} css={productImage} />
        </div>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </Card.Text>
        <Card.Text as='h3'>
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

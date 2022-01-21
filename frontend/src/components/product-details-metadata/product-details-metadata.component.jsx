import { ListGroup } from 'react-bootstrap';
import Rating from '../rating/rating.component';

const ProductDetailsMetadata = ({product: {price, rating, description, name, numReviews}}) => {
  return (
      <ListGroup variant="flush">
        <ListGroup.Item>
          <h3>{ name }</h3>
        </ListGroup.Item>
        <ListGroup.Item>
          <Rating value={ rating } text={ `${ numReviews } reviews` }/>
        </ListGroup.Item>
        <ListGroup.Item>
          Price: ${ price }
        </ListGroup.Item>
        <ListGroup.Item>
          Description: { description }
        </ListGroup.Item>
      </ListGroup>
  );
};

export default ProductDetailsMetadata;

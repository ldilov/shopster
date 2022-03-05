import { Col } from 'react-bootstrap';

const ColumnCentered = ({children, ...otherProps}) => {
  return (
      <Col className="d-flex" {...otherProps}>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            {children}
          </Col>
      </Col>
  );
};

export default ColumnCentered;

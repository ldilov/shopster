/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { Spinner } from 'react-bootstrap';
import { loaderSpinner } from './loader.styles';

const Loader = () => {
  return (
    <Spinner animation='border' role='status' css={ loaderSpinner }>
      <span className='sr-only'>Loading...</span>
    </Spinner>
  );
}

export default Loader;

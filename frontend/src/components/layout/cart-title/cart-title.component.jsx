/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { h4Title } from './cart-title.styles';

const CartTitle = ({ children }) => {
  return (
    <h4 css={h4Title}>
      {children}
    </h4>
  );
};

export default CartTitle;

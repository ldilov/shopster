/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';

import { cartBubble } from './withBubble.styles';

const WithBubble = (sourcesSelector) => {
  return (Component) => {
    return (props) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const value = useSelector(sourcesSelector);

      return (
          <Component { ...props }>
            {
              value !== 0 && <div css={ cartBubble }>{ value }</div>
            }
          </Component>
      );
    };
  };
};

export default WithBubble;

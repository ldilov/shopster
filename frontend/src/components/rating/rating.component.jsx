/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { IconContext } from "react-icons";

import { rating, ratingItem, ratingItemText, starOutlined } from './rating.styles';

const MAX_RATING = 5;

const Rating = ({value, text, color}) => {
  let stars = [];

  for(let i = 0; i < Math.floor(value); i ++) {
    stars.push(<FaStar key={`full-${stars.length}`} css={starOutlined} />)
  }

  if(value % 1 !== 0 && stars.length < MAX_RATING) {
    stars.push(<FaStarHalfAlt key={`half-${stars.length}`} css={starOutlined} />)
  }

  for(let i = 0; i < MAX_RATING - value && stars.length < MAX_RATING; i ++) {
    stars.push(<FaRegStar css={starOutlined} key={`empty-${stars.length}`} />);
  }

  return (
      <div className="my-3" css={rating}>
        <IconContext.Provider value={{ color: `${color}` }}>
        <span css={ratingItem}>
          {stars}
        </span>
        </IconContext.Provider>
        <span css={ratingItemText}>
          { text }
        </span>
      </div>
  );
};

Rating.defaultProps = {
  color: 'gold'
}

export default Rating;

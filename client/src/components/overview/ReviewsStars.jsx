import React, { useContext } from 'react';
import ReviewsContext from './ReviewsContext.js';
import styled from 'styled-components';
import Rating from '@material-ui/lab/Rating';

export default function ReviewsStars() {
  const { reviewsData } = useContext(ReviewsContext);

  const totalReviews = () => {
    if (reviewsData.length > 0) {
      let count = 0;
      Object.entries(reviewsData?.ratings)
        .map(([key, value]) => {
          return [parseInt(key), parseInt(value)];
        })
        .forEach(([_, value]) => {
          count += value;
        });
      return count;
    }
  };

  const average = () => {
    let count = 0;
    let sum = 0;
    Object.entries(reviewsData?.ratings)
      .map(([key, value]) => {
        return [parseInt(key), parseInt(value)];
      })
      .forEach(([key, value]) => {
        count += value;
        sum += key * value;
      });
    return sum / count;
  };
  return (
    <>
      {totalReviews() && (
        <>
          <Reviews>
            <a href='#route'>Read All {totalReviews()} Reviews</a>
          </Reviews>

          <Stars>
            <Rating
              name='read-only'
              value={average()}
              precision={0.25}
              max={5}
              size='large'
              readOnly
            />
          </Stars>
        </>
      )}
    </>
  );
}

const Reviews = styled.span`
  cursor: pointer;
  text-decoration: underline;
  color: #38062b;
  font-style: italic;
`;

const Stars = styled.div`
  display: inline-block;
  font-family: Times;
  padding-top: 1rem;
`;

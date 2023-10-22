import { Review } from '../interfaces/types';

const calcAverageRating = (reviewsList: Review[]): number => {
  if (reviewsList.length === 0) {
    return 0;
  }

  let stars: number = 0;

  reviewsList.forEach((review) => {
    stars += review.stars;
  });

  const averageRating = stars / reviewsList.length;

  return parseFloat(averageRating.toFixed(1));
};

export default calcAverageRating;
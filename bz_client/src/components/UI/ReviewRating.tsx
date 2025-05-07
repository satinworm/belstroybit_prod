import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

type Props = {
  initial: number;
  readonly: boolean;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  onData: any;
};
export const ReviewRating = (props: Props) => {
  const { initial, readonly } = props;
  const [rating, setRating] = useState(initial);

  const handleRating = (rate: number) => {
    setRating(rate);
    props.onData(rate);
  };

  return (
    <div style={{
		
	 }} className='star-svg'>
      <Rating
        onClick={handleRating}
        initialValue={rating}
        size={20}
        transition
        allowFraction
        readonly={readonly}
      />
    </div>
  );
};

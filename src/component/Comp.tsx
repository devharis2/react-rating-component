import React, { useState, memo } from "react";
import { AiFillStar } from "react-icons/ai";

export interface Props {
  starsAmount?: number;
  size?: number;
}

const Rating = ({ starsAmount, size }: Props): JSX.Element => {
  const [stars, setStars] = useState(new Array(starsAmount || 5).fill(false));
  function renderStars() {
    return stars.map((el: boolean, i: number) => {
      if (el) {
        <AiFillStar
          key={i}
          size={size}
          onMouseEnter={starState(i, true)}
          onMouseLeave={starState(i, false)}
          style={{
            color: "#fb923c",
            cursor: "pointer",
          }}
        />;
      }

      return (
        <AiFillStar
          key={i}
          onMouseEnter={starState(i, true)}
          onMouseLeave={starState(i, false)}
          style={{
            color: "#d1d5db",
            cursor: "pointer",
          }}
        />
      );
    });
  }

  const starState = (pos: number, value: boolean) => () => {
    const localStars = [...stars];
    localStars[pos] = value;
    setStars(localStars);
  };

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {renderStars()}
    </div>
  );
};

export default Rating;

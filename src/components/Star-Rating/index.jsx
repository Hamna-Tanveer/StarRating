import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Styles.css";
export default function StarRating(props) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const HandleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };
  const HandleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };
  const HandleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <div className="star-rating">
      {[...Array(props.noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (rating || hover) ? "active" : "inactive"}
            onMouseMove={() => {
              HandleMouseEnter(index);
            }}
            onMouseLeave={() => {
              HandleMouseLeave();
            }}
            onClick={() => {
              HandleClick(index);
            }}
            size={40}
          />
        );
      })}
    </div>
  );
}

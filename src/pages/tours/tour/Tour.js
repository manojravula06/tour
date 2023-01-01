import React, { useState } from "react";
import img from "../../../images/img_missing.png";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  const ReadMore_ReadLess = () => {
    !readMore ? setReadMore(true) : setReadMore(false);
  };
  return (
    <div>
      <div className="card shadow m-5">
        <img src={image} alt={img} />
        <footer>
          <div className="m-2">
            <h4 className="card-title">{name}</h4>
            <h4 className="text-end text-danger p-2">${price} only</h4>
            <p>
              {info}
              <button
                className="btn text-info bg-light"
                onClick={ReadMore_ReadLess}
              >
                {!readMore ? `read less` : `read more`}
              </button>
            </p>
            <button className="btn text-danger outline-danger m-2">
              Not intrested
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Tour;

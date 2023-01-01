import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  const ReadMore = () => {
    setReadMore(true);
  };
  const ReadLess = () => {
    setReadMore(false);
  };
  return (
    <div>
      <div className="card">
        <img
          src={
            "https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg?fit=fill&w=480&h=270"
          }
          alt={name}
        />
        <footer>
          <div className="m-2">
            <h4 className="card-title">Name</h4>
            <h4 className="text-end text-danger">Price</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              exercitationem perspiciatis repellendus vitae earum tempora sint
              labore molestias omnis dolorem saepe reiciendis eius, delectus
              repellat neque. Iste laudantium laborum dolore!
              <button className="btn text-info bg-light"
              onClick={(!readMore)?ReadMore:ReadLess}>
                {(!readMore) ? `read less` : `read more`}
              </button>
            </p>
            <button className="btn text-danger outline-danger">Not intrested</button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Tour;

import React, { useState, useEffect } from "react";
import { getTours } from "../../../API/Tours";
const LandingPage = () => {
  const [city, setCity] = useState([]);

  const getData = async () => {
    const data = await getTours();
    setCity(data);
    console.log("hi", data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="container">
        <h1 className="display-1 text-center">Top tourist places</h1>
        <div className="d-flex m-2">
        {city.map((item) => {
            return (
              <>
                <div className="card m-2" style={{ width: 20 + "rem" }}>
                  <img src={item.image} alt="No_Img" />
                  <div className="d-flex flex-nowrap justify-content-between m-2">
                    <p className="text-start fw-bold">{item.name}</p>
                    <h5 className="justify-content-end text-primary bg-aqua">${item.price}</h5>
                  </div>
                  <div>
                  </div>
                <p className="card-text">
                  {item.info}
                </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

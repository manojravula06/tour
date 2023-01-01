import React, { useState, useEffect } from "react";
import { getTours } from "../../../API/Tours";
import Tour from "../tour/Tour";
import img from "../../../images/img_missing.png";
import Navbar from "../../../components/Navbar/Navbar";
const LandingPage = () => {
  const [city, setCity] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const data = await getTours();
    setCity(data);
    setIsLoading(false);
  };
  const Loader = () => {
    return isLoading && <div className="position-absolute top-50 start-50">
        <div className="spinner-border" role='status'>
          <span className="visually-hidden">loading.....</span>
        </div>
      </div>
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
        <Navbar/>
      <div className="sm-container m-5">
        <Tour/>
        <h1 className="display-1 text-center">OUR TOURS</h1>
        {Loader()}
        {!isLoading && (
          <>
            <div className="lg-d-flex m-2">
              {city.map((item) => {
                return (
                  <>
                    <div className="card shadow m-2">
                      <img src={item.image} alt={img} className="" />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <h6 className="text-end text-danger card-title">
                          $ {item.price} Only{" "}
                        </h6>
                        <p className="card-text">{item.info}</p>
                        <button className="btn btn-text-danger btn-outline-danger">Not intersted</button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LandingPage;

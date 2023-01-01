import React, { useState, useEffect } from "react";
import { getTours } from "../../../API/Tours";
import Tour from "../tour/Tour";
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
    return (
      isLoading && (
        <div className="position-absolute top-50 start-50">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">loading.....</span>
          </div>
        </div>
      )
    );
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="sm-container m-5">
        <h1 className="display-1 text-center">OUR TOURS</h1>
        {Loader()}
        {!isLoading && (
          <>
            <div className="lg-d-flex m-2">
              {city.map((item) => {
                return (
                  <>
                    <Tour
                      key={item.id}
                      image={item.image}
                      name={item.name}
                      price={item.price}
                      info={item.info}
                    />
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

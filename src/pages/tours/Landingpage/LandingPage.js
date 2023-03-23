import React, { useState, useEffect } from "react";
import { getTours } from "../../../API/Tours";
import Tour from "../tour/Tour";



const LandingPage = () => {
  const [city, setCity] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const getData = async () => {
    const data = await getTours();
    setCity(data);
    setIsLoading(false);
  };
  const removeTour=(id)=>{
    const newTours=city.filter((tour)=>tour.id!==id);
    setCity(newTours)
  }
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
    <section>
      <div className=" m-5">
        <h1 className="display-1 text-center">TOURS APP</h1>
        {city.length ===0&& <>
          <button onClick={getData} className='btn btn-primary'>refresh</button>
        </>}
        {Loader()}
        {!isLoading && (
          <>
            <main className="main">
              {city.map((item) => {
                return (
                  <>
                    <Tour key={item.id} {...item}
                     removeTour={removeTour}/>
                  </>
                );
              })}
            </main>
          </>
        )}
      </div>
    </section>
  );
};

export default LandingPage;

import React from "react";
import AppRoutes from "./pages/tours/Routes/AppRoutes";
import "./App.css";

function App() {
 return (
    <AppRoutes/>
    // <div className="App">


    //   <div className="container">
    //     <h1 className="fw-bold text-decoration-underline">Yatra</h1>
    //     <div className="d-flex">
    //       {data.map((city) => (
    //         <>
    //           <div
    //             className="card m-2"
    //           //  style={{ width: 30 + "rem", height: 10 + "rem" }}
    //           >
    //             <img
    //               src={city.image}
    //               alt="img_missing"
    //               className="card-img-top"
    //             />
    //             <div className="card-body">
    //               <div className="d-flex">
    //                 <h4 className="text-start">{city.name}</h4>
    //                 <h4 className="text-end text-primary">${city.price}</h4>
    //               </div>
    //               <p className="card-text text-start">
    //                 {city.info}
    //               </p>
    //             </div>
    //             <button className="btn btn-outline-danger m-2">Not intrested</button>
    //           </div>
    //         </>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;

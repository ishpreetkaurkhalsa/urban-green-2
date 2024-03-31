// import Button from "../components/Button";
// import "./Recommended.css";

// const Recommended = ({ handleClick }) => {
//   return (
//     <div className="outer" >
//       <div style={{width:'100vw',backgroundColor:'white',paddingBottom:'15px',position:'fixed',marginTop:'10px'}}>
//         <h2 className="recommended-title">Recommended</h2>
//         <div className="recommended-flex">
//           <Button onClickHandler={handleClick} value="" title="All Products" />
//           <Button onClickHandler={handleClick} value="Terrace" title="Terrace" />
//           <Button onClickHandler={handleClick} value="Open Land" title="Open Land" />
//           <Button onClickHandler={handleClick} value="Balcony" title="Balcony" />
//           <Button onClickHandler={handleClick} value="Veranda" title="Veranda" />
//           <Button onClickHandler={handleClick} value="Apartment" title="Apartment" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Recommended;
import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import './Recommended.css';

const Recommended = ({ handleClick }) => {
  
  return (
    <div className="outer">
      <div style={{ width: '100vw', backgroundColor: 'white', paddingBottom: '15px', position: 'fixed', marginTop: '10px' }}>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex" data-aos="zoom-in"> 
          <Button onClickHandler={handleClick} value="" title="All Products" className={`button`} />
          <Button onClickHandler={handleClick} value="Terrace" title="Rice" className={`button `} />
          <Button onClickHandler={handleClick} value="Open Land" title="Wheat" className={`button `} />
          <Button onClickHandler={handleClick} value="Balcony" title="Maize" className={`button `} />
          <Button onClickHandler={handleClick} value="Veranda" title="Cotton" className={`button `} />
          <Button onClickHandler={handleClick} value="Apartment" title="Soybean" className={`button `} />
        </div>
      </div>
    </div>
  );
};

export default Recommended;

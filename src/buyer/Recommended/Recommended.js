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
  const [buttonsVisible, setButtonsVisible] = useState(false);

  useEffect(() => {
    const buttonTimeouts = [];
    
    // Define the time delay between each button appearance
    const delayBetweenButtons = 200;

    // Schedule the appearance of each button with a delay
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((button, index) => {
      const timeout = setTimeout(() => {
        button.classList.add('visible');
      }, index * delayBetweenButtons);
      buttonTimeouts.push(timeout);
    });

    // Set a timeout for the total animation duration
    const totalAnimationDuration = buttons.length * delayBetweenButtons;
    const animationTimeout = setTimeout(() => {
      setButtonsVisible(true);
    }, totalAnimationDuration);

    // Clear timeouts on component unmount
    return () => {
      buttonTimeouts.forEach(timeout => clearTimeout(timeout));
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <div className="outer">
      <div style={{ width: '100vw', backgroundColor: 'white', paddingBottom: '15px', position: 'fixed', marginTop: '10px' }}>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" className={`button ${buttonsVisible ? 'visible' : ''}`} />
          <Button onClickHandler={handleClick} value="Terrace" title="Terrace" className={`button ${buttonsVisible ? 'visible' : ''}`} />
          <Button onClickHandler={handleClick} value="Open Land" title="Open Land" className={`button ${buttonsVisible ? 'visible' : ''}`} />
          <Button onClickHandler={handleClick} value="Balcony" title="Balcony" className={`button ${buttonsVisible ? 'visible' : ''}`} />
          <Button onClickHandler={handleClick} value="Veranda" title="Veranda" className={`button ${buttonsVisible ? 'visible' : ''}`} />
          <Button onClickHandler={handleClick} value="Apartment" title="Apartment" className={`button ${buttonsVisible ? 'visible' : ''}`} />
        </div>
      </div>
    </div>
  );
};

export default Recommended;

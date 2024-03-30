
// export default AddContact;
import React, { useState } from "react";
// import farmABI from '../abis/farmABI.json';
// const ethers = require("ethers")

const AddContact = () => {
  const [inputs, setInputs] = useState({
    area: "",
    duration: "",
  });

  // const farmContract = "0x3ACd479d5e0A7BF2d11c84690277a9a92795f06d";

  // const handleChange = (e) => {
  //   // const { name, value } = e.target;
  //   // setInputs((prevInputs) => ({
  //   //   ...prevInputs,
  //   //   [name]: value,
  //   // }));
  //     const name = e.target.name;
  //     const value = e.target.value;
  //     setInputs(values => ({ ...values, [name]: value }))

  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = parseInt(value); // Convert the value to an integer
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: parsedValue, // Update the input value with the parsed integer
    }));
  };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(inputs);

  //   // //inputs.amount
  //   // const { ethereum } = window;
  //   // if (ethereum) {
  //   //   const provider = new ethers.providers.Web3Provider(ethereum);
  //   //   const signer = provider.getSigner();
  //   //   console.log(farmContract)
  //   //   const contract = new ethers.Contract(farmContract, farmABI, signer);
  //   //   // console.log(inputs.liquidity, account)
  //   //   contract.createLease(inputs.duration, inputs.area);
      
  //     // console.log("contract fetched")
  //   }
  // };

  return (
    <div>
      <br />
      <form >
        <div style={{ marginBottom: "50px" }}>
          <label style={{ marginRight: "60px" }}>Area: </label>
          <input
            type="text"
            name="area"
            placeholder="Area"
            value={inputs.area}
            onChange={handleChange}
            style={{
              border: "2px solid #808080",
              borderRadius: "5px",
              padding: "5px",
              fontSize: "1em",
              width: "70%",
            }}
          />
        </div>
        <div style={{ marginBottom: "50px" }}>
          <label style={{ marginRight: "34px" }}>Duration: </label>
          <input
            type="text"
            name="duration"
            placeholder="Duration"
            value={inputs.duration}
            onChange={handleChange}
            style={{
              border: "2px solid #808080",
              borderRadius: "5px",
              padding: "5px",
              fontSize: "1em",
              width: "70%",
            }}
          />
        </div>
        {/* <div style={{ marginBottom: "50px" }}>
          <label style={{ marginRight: "60px" }}>Type: </label>
          <input
            type="text"
            name="type"
            placeholder="Type of Property"
            style={{
              border: "2px solid #808080",
              borderRadius: "5px",
              padding: "5px",
              fontSize: "1em",
              width: "70%",
            }}
          />
        </div>
        <div style={{ marginBottom: "50px" }}>
          <label style={{ marginRight: "40px" }}>Locality: </label>
          <input
            type="text"
            name="locality"
            placeholder="Locality"
            style={{
              border: "2px solid #808080",
              borderRadius: "5px",
              padding: "5px",
              fontSize: "1em",
              width: "70%",
            }}
          />
        </div>
        <div style={{ marginBottom: "50px" }}>
          <label style={{ marginRight: "10px" }}>Proof of land: </label>
          <input
            type="file"
            name="type"
            style={{
              border: "2px solid #808080",
              borderRadius: "5px",
              padding: "5px",
              fontSize: "1em",
              width: "70%",
            }}
          />
        </div> */}

        <div style={{ textAlign: "center" }}>
          <button
            style={{
              border: "2px solid #808080",
              borderRadius: "5px",
              padding: "4px 8px",
              backgroundColor: "#f0f0f0",
              fontSize: "1em",
              cursor: "pointer",
              marginTop: "50px",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#e0e0e0")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;

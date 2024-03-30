import { BsFillBagFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import farmABI from '../../abis/farmABI.json';
const ethers = require("ethers")

const Card = ({ locality, category, area, img, title, star, reviews, prevPrice, newPrice }) => {
 
  
  // const farmContract = "0x3ACd479d5e0A7BF2d11c84690277a9a92795f06d";

 
  // const buyLand=(e)=>{
  //   e.preventDefault();
  //   // console.log(inputs);

  //   //inputs.amount
  //   const { ethereum } = window;
  //   if (ethereum) {
  //     const provider = new ethers.providers.Web3Provider(ethereum);
  //     const signer = provider.getSigner();
  //     console.log(farmContract)
  //     const contract = new ethers.Contract(farmContract, farmABI, signer);
  //     // console.log(inputs.liquidity, account)
  //     // contract.createLease(inputs.duration, inputs.area);
  //   }
  // }
  return (
    <div style={{display:'flex'}}>
      <section className="card" style={{ width: '350px' }}>
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <div style={{ display: 'flex', justifyContent: 'space-between',gap:'10px' }}>

            <h4 className="card-title">{title}</h4>
            <div className="card-reviews">
              {star} {star} {star} {star} {star}
            </div>
          </div>


          <div className="locality" style={{ fontSize: '14px', marginBottom: '8px', alignSelf: 'center', display: 'flex', alignItems: 'center' }}>
            <CiLocationOn style={{ marginRight: '5px', marginBottom:'2px' }} /> {/* Adjust margin-right for spacing */}
            {locality}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>

            <div className="type" style={{ fontSize: '14px', marginBottom: '8px' }}>
              {category}
            </div>
            <div className="area" style={{ fontSize: '14px', marginBottom: '8px' }}>
              {area} sqft.
            </div>
          </div>
          <div style={{display:'flex', justifyContent: 'space-between'}}>
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <button className="text-white bg-green-600 hover:bg-green-600 inline-flex items-center justify-center w-auto px-5 py-1 shadow-xl rounded-xl">
            Buy
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Card;

import { BsFillBagFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
const Card = ({ locality, category, area, img, title, star, reviews, prevPrice, newPrice }) => {
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
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>


        </div>
      </section>
    </div>
  );
};

export default Card;

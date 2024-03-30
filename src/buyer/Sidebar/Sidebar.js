import Category from "./Category/Category";
import Price from "./Price/Price";
import Area from "./Area/Area";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <div style={{marginTop:'100px'}}>
      <section className="sidebar" style={{marginTop:'30px'}}>
        <div className="logo-container">
          
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Area handleChange={handleChange} />
      </section>
    </div>
  );
};

export default Sidebar;

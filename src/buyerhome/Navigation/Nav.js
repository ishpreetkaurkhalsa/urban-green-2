import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container" style={{marginLeft:'-1500px',backgroundColor:'white',width:'2vw'}}>
        <input
        style={{marginBottom:'50px'}}
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter lands to search."
        />
      </div>
      
    </nav>
  );
};

export default Nav;

import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div style={{marginLeft:"-100px",marginBottom:"15px",marginTop:'-50px'}}>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Terrace"
          title="Terrace"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Open Land"
          title="Open Land"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Balcony"
          title="Balcony"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Veranda"
          title="Veranda"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Apartment"
          title="Apartment"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;

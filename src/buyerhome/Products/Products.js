import "./Product.css";

const Products = ({ result }) => {
  return (
    <div style={{marginTop:'200px'}}>
      <section className="card-container" style={{display:'flex'}}>{result}</section>
    </div>
  );
};

export default Products;

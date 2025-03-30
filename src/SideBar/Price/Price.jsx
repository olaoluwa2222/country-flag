import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input type="radio" value="" name="test2" onChange={handleChange} />
        <span className="checkmark"></span>ALL
      </label>
      <Input
        handleChange={handleChange}
        name="test2"
        value={50}
        title="$0 - $50"
      />
      <Input
        handleChange={handleChange}
        name="test2"
        value={100}
        title="$50 - $100"
      />
      <Input
        handleChange={handleChange}
        name="test2"
        value={150}
        title="$100 - $150"
      />
      <Input
        handleChange={handleChange}
        name="test2"
        value={200}
        title="over $150"
      />
    </div>
  );
};

export default Price;

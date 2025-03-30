import Input from "../../components/Input";
import "./Category.css";

const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" value="" name="test" onChange={handleChange} />
          <span className="checkmark"></span>ALL
        </label>
        <Input
          handleChange={handleChange}
          name="test"
          value="sneakers"
          title="Sneakers"
        />
        <Input
          handleChange={handleChange}
          name="test"
          value="flats"
          title="Flats"
        />
        <Input
          handleChange={handleChange}
          name="test"
          value="sandals"
          title="Sandals"
        />
        <Input
          handleChange={handleChange}
          name="test"
          value="heels"
          title="Heels"
        />
      </div>
    </div>
  );
};

export default Category;

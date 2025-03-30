import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-btns">
        <button className="btns" value="" onClick={handleClick}>
          All product
        </button>
        <Button
          className="btns"
          value="Adidas"
          title="Adidas"
          onClickHandler={handleClick}
        >
          Adidas
        </Button>
        <Button
          className="btns"
          value="Nike"
          title="Nike"
          onClickHandler={handleClick}
        >
          Nike
        </Button>
        <Button
          className="btns"
          value="Puma"
          title="Puma"
          onClickHandler={handleClick}
        >
          Puma
        </Button>
        <Button
          className="btns"
          value="Vans"
          title="Vans"
          onClickHandler={handleClick}
        >
          Vans
        </Button>
      </div>
    </div>
  );
};

export default Recommended;

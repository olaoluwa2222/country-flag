const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <div>
      <label className="sidebar-label-container color-title">
        <input type="radio" onChange={handleChange} value={value} name={name} />
        <span className="checkmark" style={{ backgroundColor: color }}></span>
        {title}
      </label>
    </div>
  );
};

export default Input;

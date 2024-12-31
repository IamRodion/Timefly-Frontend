import React from "react";

function Form({ setInputValue }) {
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="row justify-content-md-center">
      <div className="form-floating my-3 col-lg-3">
        <input
          type="text"
          className="form-control"
          id="id-input"
          placeholder="123456789"
          onChange={handleInputChange}
        />
        <label className="mx-2" htmlFor="id-input">
          ID Number
        </label>
      </div>
    </div>
  );
}

export default Form;

import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <><div className="form-card">
        <form onSubmit={props.formSubmissionHandler}>
          <div className="form-group">
            <label htmlFor="brand">Brand: </label>
            <input type='text' name='brand' className="form-control" />
          </div>   
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input type='text' name='name' className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price: </label>
            <input type='text' name='price' className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="abv">ABV: </label>
            <input type='text' name='abv' className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="img">Image URL: </label>
            <input type='text' name='img' className="form-control" />
          </div>
          <button type='submit' className="btn btn-outline-info">{props.buttonText}</button>
        </form>
      </div>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
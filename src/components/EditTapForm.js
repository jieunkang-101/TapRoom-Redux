import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditTapForm(props){

  const { tap } = props;

  function handleEditTapFormSubmission(event) {
    event.preventDefault();
    props.onEditTap({brand: event.target.brand.value, name: event.target.name.value, price: event.target.price.value, abv: event.target.abv.value, img: event.target.img.value, pints: tap.pints, message:tap.message, id: tap.id });
  }

  return (
    <React.Fragment>
      <div>
      <h2>Edit This Tap</h2>
      <ReusableForm 
        formSubmissionHandler={handleEditTapFormSubmission}
        buttonText="Add" />
      </div>  
    </React.Fragment>
  );
}

EditTapForm.propTypes = {
  onEditTap: PropTypes.func
};

export default EditTapForm;
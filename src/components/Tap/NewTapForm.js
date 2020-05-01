import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { connect } from 'react-redux';
import * as c from '../../actions/ActionTypes'

function NewTapForm(props){

  function handleNewTapFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: c.ADD_TAP,
      brand: event.target.brand.value, 
      name: event.target.name.value, 
      price: event.target.price.value, 
      abv: event.target.abv.value, 
      img: event.target.img.value, 
      pints: 124, 
      message:"", 
      id: v4()
    }
    dispatch(action);
  }

  return (
    <React.Fragment>
      <div>
      <h2>Add New Tap</h2>
      <ReusableForm 
        formSubmissionHandler={handleNewTapFormSubmission}
        buttonText="Add" />
      </div>  
    </React.Fragment>
  );
}

NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
};

export default connect()(NewTapForm);
import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { connect } from 'react-redux';
import * as c from '../../actions/ActionTypes'
import * as a from './../../actions';

function EditTapForm(props){

  const  currentTap  = props.masterTapMenu[props.selectedTap.selectedTapId];
  
  function handleEditTapFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: c.ADD_TAP,
      brand: event.target.brand.value, 
      name: event.target.name.value, 
      price: event.target.price.value, 
      abv: event.target.abv.value, 
      img: event.target.img.value, 
      pints: currentTap.pints,
      message: currentTap.message,
      id: currentTap.id
    }
    dispatch(action);
    const action2 = a.showTapMenu();
    dispatch(action2);
  }

  return (
    <React.Fragment>
      <div>
      <h2>Edit This Tap</h2>
      <ReusableForm 
        formSubmissionHandler={handleEditTapFormSubmission}
        buttonText="Update" />
      </div>  
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    masterTapMenu: state.masterTapMenu,
    selectedTap: state.selectedTap
  }  
}


export default connect(mapStateToProps)(EditTapForm);
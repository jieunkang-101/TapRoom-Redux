import React from "react";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";
import { connect } from 'react-redux';
import * as c from '../../actions/ActionTypes'
import * as a from '../../actions';

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
    const action2 = a.showTapMenu();
    dispatch(action2);
  }

  return (
    <React.Fragment>
      <div>
        <h2>Add New Tap</h2>
        <div class="row justify-content-center">
          <button onClick={() => props.onClickToHome()} className="btn btn-outline-info float-right">Cancel</button>
        </div>
        <ReusableForm 
          formSubmissionHandler={handleNewTapFormSubmission}
          buttonText="Add" />  
      </div> 
    </React.Fragment>
  );
}

export default connect()(NewTapForm);
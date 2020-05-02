import React from "react";
import TapMenu from './TapMenu';
import NewTapForm from './NewTapForm';
import EditTapForm from './EditTapForm';
import TapDetail from './TabDetail';
import { connect } from "react-redux";
import * as a from './../../actions';
import PropTypes from 'prop-types';

function TapControl(props) {

  const handleTapSelection = (id) => {
    const currentTap = props.masterTapMenu[id];
    const { dispatch } = props;
    const action = a.selectTap(currentTap.id);
    dispatch(action);
  }

  const handleToHome = () => {
    const { dispatch } = props;
    const action = a.showTapMenu();
    dispatch(action);
    const action2 = a.unselectTap();
    dispatch(action2);
  }

  const handleDisplayAddNewForm = () => {
    const { dispatch } = props;
    const action = a.unselectTap();
    dispatch(action);
    const action2 = a.showNewTapForm();
    dispatch(action2);
  }

  const handleDisplayEditForm = () => {
    const { dispatch } = props;
    const action = a.showEditTapForm();
    dispatch(action);
  }

  const handleSellPint = (id) => {
    const currentTap = props.masterTapMenu[id];
    const { dispatch } = props;
    const action = a.sellPint(currentTap.id, currentTap.pints);
    dispatch(action);
  }

  const handleRestockTap = (id) => {
    const currentTap = props.masterTapMenu[id];
    const { dispatch } = props;
    const action = a.restockTap(currentTap.id, currentTap.pints);
    dispatch(action);
  }

  const handleDeleteTap = (id) => {
    const { dispatch } = props;
    const action = a.deleteTap(id);
    dispatch(action);
    const action2 = a.unselectTap();
    dispatch(action2);
    const action3 = a.showTapMenu();
    dispatch(action3);
  }

  const setVisibility = () => {
    if (props.displayToggle.showEditTapForm) {
      return (
        <EditTapForm 
          onClickToHome = { handleToHome }
        />
      );
    } else if (props.selectedTap.selectedTapId !== null) {
      return (
        <TapDetail 
          tap = { props.masterTapMenu[props.selectedTap.selectedTapId] } 
          onClickToHome = { handleToHome } 
          onClickRestock = { handleRestockTap } 
          onClickEdit = { handleDisplayEditForm } 
          onClickDelete = { handleDeleteTap } 
        />        
      );
    } else if (props.displayToggle.showNewTapForm) {
      return (
        <NewTapForm 
          onClickToHome = { handleToHome } 
        />
      );
    } else if (props.displayToggle.showTapMenu) {
      return (
        <TapMenu 
          tapMenu = { props.masterTapMenu } 
          onClickAddNewTap = { handleDisplayAddNewForm } 
          onClickTapDetail = { handleTapSelection } 
          onClickSell={ handleSellPint }  
        />
      );
    }   
  }

  return (
    <>
    { setVisibility() }
    </>
  );
}

TapControl.propTypes = {
  masterTapMenu: PropTypes.object,
  selectedTap: PropTypes.object,
  displayToggle: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    masterTapMenu: state.masterTapMenu,
    selectedTap: state.selectedTap,
    displayToggle: state.displayToggle
  }  
}

export default connect(mapStateToProps)(TapControl);
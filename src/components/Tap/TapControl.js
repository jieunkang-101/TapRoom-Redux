import React from "react";
import TapMenu from './TapMenu';
import NewTapForm from './NewTapForm';
import EditTapForm from './EditTapForm';
import TapDetail from './TabDetail';
import { connect } from "react-redux";
import * as a from './../../actions';
import PropTypes from 'prop-types';
import Tap from "./Tap";

function TapControl(props) {

  const handleTapSelection = (id) => {
    const currentTap = props.masterTapMenu[id];
    const { dispatch } = props;
    const action = a.selectTap(currentTap.id);
    dispatch(action);
  }

  const handleDisplayAddNewForm = () => {
    const { dispatch } = props;
    const action = a.showNewTapForm();
    dispatch(action);
  }

  // const handleDisplayTapMenu = () => {
  //   const { dispatch } = props;
  //   const action = a.showTapMenu();
  //   dispatch(action);
  // }

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

  const setVisibility = () => {
    if (props.displayToggle.showEditTapForm) {
      return (
        <EditTapForm />
      )
    }
    else if (props.selectedTap.selectedTapId !== null) {
      return (
        <TapDetail tap = { props.masterTapMenu[props.selectedTap.selectedTapId] } onClickEdit = { handleDisplayEditForm } />        
      )
    }
    else if (props.displayToggle.showNewTapForm) {
      return (
        <NewTapForm />
      )
    } else if (props.displayToggle.showTapMenu) {
      return (
        <TapMenu tapMenu = { props.masterTapMenu } onClickAddNewTap = { handleDisplayAddNewForm } onClickTapDetail = { handleTapSelection } onClickSell={ handleSellPint }  />
      )
    }   
  }

  return (
    <>
    {setVisibility()};
    </>
  )
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
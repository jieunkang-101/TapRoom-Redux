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

  const handleClickingAddNewTap = () => {
    const { dispatch } = props;
    const action = a.showNewTapForm();
    dispatch(action);
  }

  const setVisibility = () => {
    if (props.displayToggle.showNewTapForm) {
      return (
        <NewTapForm />
      )
    } else if (props.displayToggle.showTapMenu) {
      return (
        <TapMenu tapMenu = { props.masterTapMenu } onClickAddNewTap = { handleClickingAddNewTap } onTabClick = { handleTapSelection } />
      )
    }   
  }

  return (
    <>
    {setVisibility()};
    {/* <TapDetail tap = { props.masterTapMenu[props.selectedTap.selectedTapId] } />
    <NewTapForm /> */}
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
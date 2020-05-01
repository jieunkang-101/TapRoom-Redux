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
  console.log("id", props.masterTapMenu[props.selectedTap.selectedTapId]);

  return (
    <>
    <TapMenu tapMenu = { props.masterTapMenu } onTabClick = { handleTapSelection } />
    <TapDetail tap = { props.masterTapMenu[props.selectedTap.selectedTapId] } />
    <NewTapForm />
    </>
  )
}

TapControl.propTypes = {
  masterTapMenu: PropTypes.object,
  selectedTap: PropTypes.object
}

const mapStateToProps = (state) => {
  
  return {
    masterTapMenu: state.masterTapMenu,
    selectedTap: state.selectedTap
  }  
}

export default connect(mapStateToProps)(TapControl);
import React from "react";
import TapMenu from './TapMenu';
import NewTapForm from './NewTapForm';
import EditTapForm from './EditTapForm';
import TapDetail from './TabDetail';
import { connect } from "react-redux";
import * as a from './../../actions';
import PropTypes from 'prop-types';

function TapControl(props) {
  return (
    <>
    <TapMenu tapMenu = { props.masterTapMenu } />
    </>
  )
}

TapControl.propTypes = {
  masterTapMenu: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterTapMenu: state.masterTapMenu
  }  
}

export default connect(mapStateToProps)(TapControl);
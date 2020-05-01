import React from 'react';
import PropTypes from 'prop-types';

function Header(props){
  return (
    <>
    <div className="container-fluid">
      <div className="jumbotron" id="jumbo">
        <div className="headerText">
          <h1>TAP ROOM</h1> 
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <button
                type="button" 
                className="link-button mr-3" 
                onClick={() => props.onClickToHome()}><strong>Menu</strong>
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button" 
                className="link-button mr-" 
                onClick={() => props.onClickAddNewTap()}>AddNewTap 
              </button>
            </li>
          </ul>
        </div>  
      </nav>
    </div>
    <br></br>
    <br></br>
    </>
  );
}

Header.prototypes = {
  onClickToHome: PropTypes.func,
  onClickAddNewTap: PropTypes.func
}

export default Header;
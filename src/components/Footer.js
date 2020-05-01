import React from 'react';
import PropTypes from 'prop-types';

function Footer(props){
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer-right">  
          <a href="https://www.linkedin.com/in/jieun--kang/"><i className="fa fa-linkedin"></i></a>
          <a href="http://www.github.com/jieunkang-101"><i className="fa fa-github"></i></a>
        </div>
        <div className="footer-left">
          <p className="footer-links">
            <button
              type="button" 
              className="link-button link-1" 
              onClick={() => props.onClickToHome()}>Home
            </button>
            <a href="mailto:jieunkang101@gmail.com">Contact</a>
          </p>
          <p>Copyright &copy; 2020 Jieun Kang</p>
        </div>
      </div>
    </React.Fragment>
  );  
}

Footer.propTypes = {
  onClickToHome: PropTypes.func,
  onClickAddNewTap: PropTypes.func
}

export default Footer;


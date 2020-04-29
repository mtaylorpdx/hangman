import React from 'react';
import PropTypes from "prop-types";

function HangmanImage (props) {
  return (
    <React.Fragment>
      <img src={require("./../img/6.jpg")} alt="hang man"/>
    </React.Fragment> 
  );
}

HangmanImage.propTypes = {
  img: PropTypes.string,
};

export default HangmanImage;


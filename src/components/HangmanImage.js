import React from 'react';
import PropTypes from "prop-types";

const mistake = 1;

function HangmanImage (props) {
  return (
    <React.Fragment>
      <img src={require("./../img/" + {mistake} + ".jpg")} alt="hang man"/>
    </React.Fragment> 
  );
}

HangmanImage.propTypes = {
  img: PropTypes.string,
};

export default HangmanImage;


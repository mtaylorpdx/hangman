import React from 'react';
import PropTypes from "prop-types";


function HangmanImage (props) {
  return (
    <React.Fragment>
      <img src={require("./../img/" + props.img + ".jpg")} alt="hang man"/>
    </React.Fragment> 
  );
}

HangmanImage.propTypes = {
  img: PropTypes.number,
};

export default HangmanImage;


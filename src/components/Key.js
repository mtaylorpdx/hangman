import React from "react";
import PropTypes from "prop-types";



function Key(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKeyClicked(props)}>
      <h3>{props.letter}</h3>
      </div>
    </React.Fragment>
  );
}

Key.propTypes = {
  whenKeyClicked: PropTypes.func,
  letter: PropTypes.string,
  selected: PropTypes.bool
}

export default Key;
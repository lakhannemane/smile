import React from "react";
import PropTypes from "prop-types";

const Index = ({ text, OK, styleButton }) => {
  return (
    <button className={`${styleButton}`} onClick={OK}>
      {text}
    </button>
  );
};

Index.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  address: PropTypes.object,
  friends: PropTypes.array,
};

export default Index;

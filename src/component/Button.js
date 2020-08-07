import React from "react";
import PropTypes from "prop-types";

export const Label = ({ activeCount }) => {
  return (
    <React.Fragment>
      <label className="customLabel">{activeCount} Left</label>
    </React.Fragment>
  );
};

export const Button1 = ({ active, count, children, onClick }) => {
  return (
    <React.Fragment>
      {/* <label className={count > 0 ? "label" : ""}>
        {count > 0 ? count : ""}
      </label> */}
      <button
        onClick={onClick}
        className={active ? "operation selected-btn" : "operation"}
      >
        {children}
      </button>
    </React.Fragment>
  );
};

export const Button2 = ({ count, children, onClick }) => {
  // const count = todoIds.length;
  return (
    <React.Fragment>
      {count > 0 ? (
        <button onClick={onClick} className="operation button">
          {children}
        </button>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

// Button.propTypes = {
//   active: PropTypes.bool.isRequired,
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

// export default Button;

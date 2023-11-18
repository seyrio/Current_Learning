import React from "react";

export const Alert = (props) => {
  return (
    <div style={{ height: "40px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.alert.type.toUpperCase()}</strong> : {props.alert.msg}
        </div>
      )}
    </div>
  );
};

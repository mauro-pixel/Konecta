import React from "react";

const SuccessAlert = props => {
    console.log(props);
    return props.msg !== "" ? (
        <div className="alert alert-success">{props.msg}</div>
    ) : null;
};

export default SuccessAlert;

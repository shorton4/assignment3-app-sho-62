import React from "react";

function Checkout(props) {
    return (
        <div className="container col-sm-4 col-md-4  border border-primary rounded">
        <button className="btn btn-primary" onClick={props.action}>Checkout</button>
        </div>
    )
}

export default Checkout
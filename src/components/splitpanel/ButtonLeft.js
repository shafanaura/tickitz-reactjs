import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

function ButtonPanel(props) {
  return (
    <div className="pt-4 checkout">
      <Link to={props.goButtonLeft}>
        <Button
          {...props}
          variant="outline-primary"
          className="float-left col-12 col-md-5"
        >
          {props.buttonText}
        </Button>
      </Link>
    </div>
  );
}

export default ButtonPanel;

import React from "react";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
    return (
        <div className="jumbotron jumbotron-fluid m-5 text-center">
            <div className="container">
                <h1 className="display-4">{props.title}</h1>
                <p className="lead">{props.description}</p>
                <a className="btn btn-primary btn-lg" href={props.buttonURL} role="button">
                    {props.buttonLabel}
                </a>
            </div>
        </div>
    );
};

Jumbotron.PropTypes = {
    //proptypes here
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonURL: PropTypes.string,
};

export default Jumbotron;
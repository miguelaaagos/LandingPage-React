import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">{props.navbarTitle}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link selected" href="#">{props.item1} <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{props.item2} </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{props.item3} </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{props.item4} </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

Navbar.PropTypes = {
	//proptypes here
	navbarTitle: PropTypes.string,
	item1: PropTypes.string,
	item2: PropTypes.string,
	item3: PropTypes.string,
    item4: PropTypes.string,
};

export default Navbar;
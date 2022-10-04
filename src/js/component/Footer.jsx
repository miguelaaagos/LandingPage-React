import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
    // 1) replace the hard-coded image, description, link, etc. With their property variable.
    return (
        <div className='text-center p-4 bg-dark text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            {props.title}
            <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                {props.siteUrl}
            </a>
        </div>
    );
};


Footer.PropTypes = {
    title: PropTypes.string,
    // 2) add here the new properties into the proptypes object
    siteUrl: PropTypes.string,
};


export default Footer;
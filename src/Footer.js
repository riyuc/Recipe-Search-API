import React from 'react';

const Footer = () => {
    return (
        <div className="text-center text-dark">
            &copy; {new Date().getFullYear()} Thanks for using the website :)
        </div>
    );
}

export default Footer;
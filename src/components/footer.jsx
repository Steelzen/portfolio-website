import React, { useState, useEffect } from "react";
import $ from "jquery";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="ft-content">
        <div className="footer-link">
          <a
            className="admin-link"
            href="https://steelzen-website.herokuapp.com/admin/"
          >
            Admin
          </a>
        </div>
        <div className="copyright-container">
          <p>Copyright Taehyung Kwon</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

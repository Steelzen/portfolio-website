import React from "react";

const Footer = (props) => {
  const currentYear = new Date().getFullYear();

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
          <p>Copyright &copy; {currentYear} Taehyung Kwon</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

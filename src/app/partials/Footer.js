import React from "react";

export const Footer = (props) => {
    return (
        <footer className="page-footer">
          <div className="container">

          </div>
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Jovica Krivosija
            </div>
            <div className='grey-text text-lighten-4 right'>
              {`Last update: ${props.lastUpdate()}`}
            </div>
          </div>
        </footer>
    )
}
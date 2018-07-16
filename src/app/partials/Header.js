import React from "react";
import { Link } from 'react-router-dom';

export const Header = (props) => {
    return (<nav>
        <div className="nav-wrapper container">
          <li className="brand-logo left" id="logo"><Link to='/'><i className="material-icons">contacts</i>{props.title}</Link></li>
          <ul className="right ">
            <li><Link to='/about'>About</Link></li>
            <li><a><i className="material-icons" onClick={ () => props.getUserData() }>refresh</i></a></li>
            <li><a><i className="material-icons" onClick={ () => props.listClickHandler() }>{ props.isListView ? "view_module" : "view_list" }</i></a></li>
            </ul>
        </div>
        </nav>);
}

Header.defaultProps = {
    title: "People App"
}


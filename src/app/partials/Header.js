import React from "react";
import { Link } from 'react-router-dom';

export const Header = (props) => {
    return (<nav>
        <div className="nav-wrapper">
          <li href="#" className="brand-logo center"><Link to='/'>{props.title}</Link></li>
          <ul className="right ">
            <li><Link to='/about'>About</Link></li>
            <li><a><i className="material-icons" onClick={ () => props.getUserData() }>refresh</i></a></li>
            <li><a><i className="material-icons" onClick={ () => props.listClickHandler() }>{ props.isListView ? "view_module" : "view_list" }</i></a></li>
            </ul>
        </div>
        </nav>);
}

Header.defaultProps = {
    title: "Bit Persons"
}


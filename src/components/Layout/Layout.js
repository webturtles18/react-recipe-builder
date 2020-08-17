import React from 'react';
import Aux from '../../hoc/ReactAux';
import Topbar from '../Topbar/Topbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import classes from './Layout.module.css';

const Layout = (props) => {
    return (
        <Aux>
            <Topbar/>
            {/* SideDrawer, Backdrop */}
            {props.children}
        </Aux>
    )
}

export default Layout;

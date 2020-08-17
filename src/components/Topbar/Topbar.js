import React from 'react';
import Aux from '../../hoc/ReactAux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
//import classes from './Layout.module.css';

const Topbar = (props) => {
    return (
        <Aux>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <div className="container">
                    <Navbar.Brand>MyRecipe</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <NavLink className="nav-link" to="/recipes" exact>Recipes</NavLink>
                            <NavLink className="nav-link" to={{
                                pathname: "/new-recipe",
                                // hash:"#submit",
                                // search: "?quick-submit=true"
                            }}>New Recipe</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </Aux>
    )
}

export default Topbar;

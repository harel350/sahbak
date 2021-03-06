import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, Dropdown, DropdownToggle, DropdownMenu } from 'mdbreact';
import { NavLink } from 'react-router-dom';

import './navbar.css';
import Modals from './Modals.js';
import AQMessageBox from './AQMessageBox.js';



class NavbarMenu  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,


        };
    this.onClick = this.onClick.bind(this);





    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    changeLocation(){
        console.log("the change");
        this.setState({

            location: '/msg',
        });
    }




    render() {
        return (

                <Navbar id="MainNavbar" color="grey" dark expand="md" scrolling>
                        <NavbarBrand href="/" >
                         <strong style={{ fontSize: '24px' }}><b>Logo</b></strong>
                        </NavbarBrand>
                        { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                        <Collapse isOpen = { 'this.state.collapse' } navbar >
                        <NavbarNav>

                                <NavItem>
                                    <Dropdown >
                                        <DropdownToggle nav caret><i className="navbar-toggler-icon" id="BellIcon"></i></DropdownToggle>
                                            <DropdownMenu id="DropNavi">
                                                    <NavLink to="/table"  className="ad">טבלאות</NavLink>
                                                    <NavLink to="/managementSoldiers" className="ad" >ניהול חיילים ומרצים</NavLink>
                                                    <NavLink to="/msg" className="ad" >הפקת דיפלומה</NavLink>

                                            </DropdownMenu>
                                    </Dropdown>
                                </NavItem>
                                <NavItem>


                                     <form className="form-inline md-form mt-0">
                                        <input className="form-control mr-sm-2 mb-0 text-white" id="SearchInput" type="text" placeholder="Search" aria-label="Search"/>
                                        <i className="fa fa-search" id="SearchIcon"></i>
                                    </form>
                                </NavItem>
                            </NavbarNav>

                            <NavbarNav right id="NavbarOfIconMenu">

                                <NavItem>
                                      <Modals/>
                                </NavItem>
                                <NavItem>
                                    <AQMessageBox/>
                                </NavItem>
                            </NavbarNav>


                    </Collapse>
                </Navbar>
        );
    }
}


export default NavbarMenu;

import "./navegation.css"
import {Link as Linkrouter} from "react-router-dom"
import React, { useState } from 'react'
//import { connect } from 'react-redux'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import user from '../../image/avatar.png'



const Navegation = () => {

    //const userIcon = props.token ?  <div className="userProfilePhoto" style={{ backgroundImage: `url('${user}')` }}></div> : <img className="user" src= "/assets/person-circle.svg" alt="usericon" />
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (
        <>
            <Navbar color="light" light expand="md">
              <NavbarToggler className="ms-2" onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto d-flex align-content-center" navbar>
                <NavbarBrand href="#"><img src="/assets/logo2.png" alt="logo" className="logo"/></NavbarBrand>
                  <div className="p-3 navheader">
                    <NavItem>
                        <Linkrouter to="/">Home</Linkrouter>
                      </NavItem>
                      <NavItem>
                        <Linkrouter to="/cities">Cities</Linkrouter>
                      </NavItem>
                  </div>
                </Nav>
              </Collapse>
                <p className="welcome">Welcome !</p>
              <UncontrolledDropdown nav inNavbar>
           <div className="userdiv">
           <DropdownToggle nav caret>
               
              </DropdownToggle>
              <DropdownMenu right>
              <DropdownItem>
                <Linkrouter to= "/signIn">Sign in</Linkrouter>
                </DropdownItem>)
                <DropdownItem>
                <Linkrouter to="/signUp">Sign up</Linkrouter>
                </DropdownItem>)
               <DropdownItem>
               <p className="signOut"> Sign out</p>
                </DropdownItem>
              </DropdownMenu>
           </div>
            </UncontrolledDropdown>
      </Navbar>

        </>
    )
}

export default Navegation
import React, { useState } from 'react';
import {
  Nav,
  NavItem,
} from 'reactstrap';

import {Link} from 'react-router-dom';

const NavBar = () => {
  return(
          <Nav>
            <NavItem>
              <Link to="/about">About</Link>
            </NavItem>
            <NavItem>
             <Link to="/addBook">AddBook</Link>
            </NavItem>
          </Nav>
  );
}

export default NavBar;


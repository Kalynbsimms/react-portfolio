import React, { useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import  './App.css'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText, Container
} from 'reactstrap';


const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
    <Router>
      <div>
       <container>
          <Navbar color="warning" light expand="md">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto " navbar>
                <NavItem>
                  <NavLink><Link className="link " to="/" >Home</Link></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink><Link className="link " to="/portfolio" >Portfolio</Link></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink><Link className="link " to="/contact" >Contact</Link></NavLink>
                </NavItem>
              </Nav>
             
            </Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
       </container>
      </div>
    </Router>
    
    </>
  )
}

export default App
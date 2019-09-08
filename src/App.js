import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import routes from "./routes/routes";

import { NavLink } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Authors from "./Pages/Authors/Authors";

class App extends Component {
  state = {
    isNavOpen: false
  };

  toggleNavBar = event => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  };

  render() {
    const { isNavOpen } = this.state;
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggleNavBar} />
          <a className="navbar-brand" href={"home"}>
            Blog
          </a>
          <Collapse isOpen={isNavOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to={routes.home}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to={routes.authors}
                >
                  Authors
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to={routes.newPost}
                >
                  New Post
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.authors} component={Authors} />
      </div>
    );
  }
}

export default App;

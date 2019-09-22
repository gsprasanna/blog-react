import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import routes from "./routes/routes";

import { NavLink, withRouter } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Authors from "./Pages/Authors/Authors";
import Post from "./Pages/Post/Post";
import Author from "./Pages/Author/Author";

class App extends Component {
  state = {
    isNavOpen: false
  };

  toggleNavBar = event => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  };

  componentDidMount() {
    /* withRouter HOC having three props : history, location, match */
    const { history, location } = this.props;
    if (location.pathname === "/") {
      history.push(routes.home);
    }
  }

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
            <NavLink className="ml-auto" navbar>
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
            </NavLink>
          </Collapse>
        </Navbar>

        <Route exact path={routes.home} component={Home} />
        <Route path={routes.post} component={Post} />
        <Route path={routes.author} component={Author} />
        <Route exact path={routes.authors} component={Authors} />
      </div>
    );
  }
}

export default withRouter(App);

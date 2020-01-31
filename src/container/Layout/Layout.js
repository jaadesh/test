import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import Aux from '../../hoc/Auxillary';
import Header from '../../component/Layout/Header';
import Leftbar from '../../component/Layout/Leftbar';
import Footer from '../../component/Layout/Footer';
import * as authActions from '../../store/actions/authAction';
import * as menuActions from '../../store/actions/menuAction';

class Layout extends Component {

  state = {
    dropDown: false,
    isCollapsed: false,
    menuActive: true,
  }

  componentDidMount() {
    this.props.onFetchMenu(this.props.token);
  }

  componentDidUpdate() {
    const Path = this.props.location.pathname.split('/');
    const currentPath = '/' + Path[1];
    if (this.props.menu) {
      let allowedPath = [];
      let allowedPaths = [];
      this.props.menu.forEach(menuItem => {
        allowedPath.push(menuItem.url);
        if (menuItem.menuVisible === false) {
          allowedPaths.push({ [menuItem.visibleUnder]: menuItem.url });
        }
        else {
          allowedPaths.push({ [menuItem._id]: menuItem.url });
        }
        menuItem.submenu.forEach(subMenuItem => {
          allowedPath.push(subMenuItem.url);
          allowedPaths.push({ [menuItem._id]: subMenuItem.url });
        })
      })
      const exists = allowedPath.find(function (current) {
        return current === currentPath;
      });
      if (!exists) { // Logout if unauthrozed access to the page
        this.props.onLogout(this.props.token);
      }

      let active = null;
      allowedPaths.forEach(objs => {
        if (Object.values(objs)[0] === currentPath) {
          active = Object.keys(objs)[0];
          return
        }
      })

      if (this.state.menuActive && active) {
        const activeMenu = this.props.menu.map(eachItem => {
          if (eachItem._id === active) {
            if (eachItem.hasChild) {
              eachItem = { ...eachItem, classes: eachItem.classes += ' active', submenuClass: 'children' }
            }
            else {
              eachItem = { ...eachItem, classes: eachItem.classes += ' active' }
            }
          }
          return eachItem;
        })
        this.setState(prevState => {
          return {
            menuActive: !prevState.menuActive
          }
        })
        this.props.onSetMenu(activeMenu);
      }
    }
  }


  sideDrawerClickHandler = () => {
    this.setState((prevState) => {
      return { isCollapsed: !prevState.isCollapsed }
    });
  }

  toogleDropdownHandler = () => {
    this.setState((prevState) => {
      return { dropDown: !prevState.dropDown }
    });
  }

  toggleSubMenu = (id) => {
    const menuData = this.props.menu.map(e => {
      if (e._id === id) {
        if (e.submenuClass === 'children hidden') {
          e = { ...e, submenuClass: 'children' }
        }
        else {
          e = { ...e, submenuClass: 'children hidden' }
        }
      }
      return e;
    });
    this.props.onSetMenu(menuData);
  }

  logoutHandler = () => {
    this.props.onLogout(this.props.token);
  }

  render() {
    return (
      <Aux>
        <Header
          sideDrawerClicked={this.sideDrawerClickHandler}
          collapsed={this.state.isCollapsed}
          toogleDropdown={this.toogleDropdownHandler}
          dropDown={this.state.dropDown}
          logoutClicked={this.logoutHandler}
        />
        <section>
          <div className={"mainwrapper " + (this.state.isCollapsed ? 'collapsed' : '')}>
            <Leftbar toggleSubMenu={this.toggleSubMenu} menuData={this.props.menu} />
            <div className="mainpanel">
              {this.props.children}
            </div>
          </div>
        </section>
        <Footer />
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.Auth.name,
    token: state.Auth.token,
    menu: state.Menu.menu,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: (token) => dispatch(authActions.logoutStart(token)),
    onFetchMenu: (token) => dispatch(menuActions.fetchMenuStart(token)),
    onSetMenu: (menu) => dispatch(menuActions.fetchMenuSuccess(menu)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
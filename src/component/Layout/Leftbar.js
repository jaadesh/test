import React from 'react';
import { NavLink } from 'react-router-dom';

const leftbar = (props) => {

  let leftbar = null;
  if (props.menuData) {
    leftbar = props.menuData.map((menuItem) => (
      menuItem.menuVisible ? menuItem.hasChild ?
        <li key={menuItem._id} className={menuItem.classes}><a href="javascript:void(0)" onClick={() => props.toggleSubMenu(menuItem._id)}> <span className="pull-right">
          <i className="fa fa-chevron-down"></i>
        </span> <i className={menuItem.icon}></i> <span> {menuItem.name}</span></a>
          <ul className={menuItem.submenuClass}>
            {menuItem.submenu.map((submenuItem, i) => (
              <li key={i}>
                <NavLink className={submenuItem.icon} activeClassName='active' to={submenuItem.url} > {submenuItem.name}</NavLink>
              </li>
            ))}
          </ul>
        </li>
        :
        <li key={menuItem._id} className={menuItem.classes}>
          <NavLink activeClassName='active' to={menuItem.url} > <i className={menuItem.icon}></i> <span className="pull-right"> <i className="fa fa-chevron-right"></i> </span> <span> {menuItem.name} </span> </NavLink>
        </li>
        : null
    ));
  }

  return (
    <div className="leftpanel">
      <ul className="nav nav-pills nav-stacked">
        {leftbar}
      </ul>
    </div>
  )
}

export default leftbar;


import React from 'react';

import { STORAGE_NAME } from '../../config/config'
const header = (props) => {
  return (
    <header>
      <div className={"headerwrapper " + (props.collapsed ? "collapsed" : "")}>
        <div className="header-left">
          <img src="/assets/images/logo.png" alt="" className="dashboard_logo" />
          <div className="pull-right">
            <button className="menu-collapse" onClick={props.sideDrawerClicked}>
              <i className="fa fa-bars"></i>
            </button>
          </div>
        </div>

        <div className="header-right">

          <div className="pull-right">
            <div id="notification_data" className="btn-group btn-group-list btn-group-notification">
            </div>
            <div className={'btn-group btn-group-option' + (props.dropDown ? ' open' : '')}>
              <button onClick={props.toogleDropdown} type="button" className="btn btn-default dropdown-toggle">
                {localStorage.getItem(STORAGE_NAME)} <i className="fa fa-caret-down"></i>
              </button>
              <ul className="dropdown-menu pull-right" role="menu">
                <li><button onClick={props.logoutClicked}><i className="glyphicon glyphicon-log-out"></i>Sign Out</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header >
  )

}

export default header;
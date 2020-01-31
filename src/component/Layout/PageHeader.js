import React from 'react';

const pageHeader = (props) => {
  return (
    <div className="pageheader">
      <div className="media">
        <div className="pageicon pull-left">
          <i className="fa fa-home"></i>
        </div>
        <div className="media-body">
          <h4>{props.title}</h4>
        </div>
      </div>
    </div>
  )
}
export default pageHeader;
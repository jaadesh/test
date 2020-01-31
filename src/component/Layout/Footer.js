import React from 'react';

const footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center">
            Ecap Mart © {(new Date().getFullYear())} All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer;
import React, { Component } from 'react';
// import Popup from "reactjs-popup";
// import { confirmAlert } from 'react-confirm-alert'; // Import
// import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import PageHeader from '../../component/Layout/PageHeader';
import Layout from '../../container/Layout/Layout';

class Dashboard extends Component {

  render() {
    return (
      <Layout>
        <PageHeader title="Dashboard" />
        {/* <Popup trigger={<button className="button"> Open Modal </button>} modal>
          {close => (
            <div className="modal">
              <a className="close" onClick={close}>
                &times;
        </a>
              <div className="header"> Modal Title </div>
              <div className="content">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
          <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
              <div className="actions">
                <Popup
                  trigger={<button className="button"> Trigger </button>}
                  position="top center"
                  closeOnDocumentClick
                >
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                    magni omnis delectus nemo, maxime molestiae dolorem numquam
                    mollitia, voluptate ea, accusamus excepturi deleniti ratione
                    sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
                </Popup>
                <button
                  className="button"
                  onClick={() => {
                    close();
                  }}
                >
                  close modal
          </button>
              </div>
            </div>
          )}
        </Popup> */}
      </Layout>
    )
  }
}

export default Dashboard;
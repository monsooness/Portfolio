import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import SFSU from './Images/SFSU.jpg';
import PG from './Images/profileGenomics.jpg';
import MNM from './Images/mnm.jpg';
import HR from './Images/hack-reactor.jpg'

import './Resume.css'

class Resume extends Component {
render() {
  return (
    <div>
      <div className="intro">Timeline</div>
      <div className="resume_container">
      <div id="wrapper">
        <div id="content">
          <ul id="bar">

            <li id="SFSU">
              <div class="top">
                <img src={SFSU} height="100" width="100" alt="SFSU" />
              </div>
              <div class="bottom">
                <div class="infobox">
                  <h3>SFSU (2016)</h3>
                  <p>Biochemistry, B.S </p>
                </div>
              </div>
            </li>

            <li id="pg">
              <div class="top">
                <img src={PG} height="100" width="100" alt="Profile Genomics" />
              </div>
              <div class="bottom">
                <div class="infobox">
                  <h3>Profile Genomics (2017)</h3>
                  <p>Research Assistant </p>
                </div>
              </div>
            </li>

            <li id="mnm">
              <div class="top">
                <img src={MNM} height="100" width="100" alt="MNM" />
              </div>
              <div class="bottom">
                <div class="infobox">
                  <h3>Developer (2018)</h3>
                  <p> Freelancing </p>
                </div>
              </div>
            </li>

            <li id="hr">
              <div class="top">
                <img src={HR} height="100" width="100" alt="MacBook" />
              </div>
              <div class="bottom">
                <div class="infobox">
                  <h3>Hack Reactor (2018)</h3>
                  <p>Advanced Software Engineering Bootcamp </p>
                </div>
              </div>
            </li>

            {/* <li id="macmini">
              <div class="top">
                <img src="images/macmini.png" alt="Mac Mini" />
              </div>
              <div class="bottom">
                <div class="infobox">
                  <h3>Mac&nbsp;Mini</h3>
                  <p>55,6</p>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  </div>
    )
  }
}

export default withRouter(Resume);
import React from 'react';
import { Grid, Cell } from 'react-mdl';
import photoMe from '../images/photoMe.png';
class Landing extends React.Component {
    render() {
      return(
        <div style={{width: '100%', margin: 'auto'}}>
          <Grid className="landing-grid">
            <Cell col={6}>

              <div className="intro">
                  <h4 style={{marginTop: '8em', marginLeft: '3em'}}>Hello, I'm</h4>
                  <h1>Winnie Zhang</h1>
                  <h4>UX/UI Design Student and Content Creator</h4>
              </div>

              <div className="desc">
                  <h4 style={{color: '#c3846b', marginLeft: '5em', fontSize:'1em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
              </div>

              <div className="banner-text">
                <div className="social-links">
        
                  {/* LinkedIn */}
                  <a href="http://linkedin.com/in/winnie-zhang-abba35155" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                  {/* Instagram */}
                  <a href="http://instagram.com/wzhangdesign" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-instagram" aria-hidden="true" />
                  </a>

                  {/* Github */}
                  <a href="http://github.com/winzhng" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a>

                  {/* Email */}
                  <a href="winniezhangdesign.com" rel="noopener noreferrer" target="_blank">
                    <i className='fa fa-envelope' aria-hidden='true'/>
                  </a>
                </div>
              </div>
            </Cell>
            <Cell col={6}>
              <img src={photoMe} style={{width: '50%', marginTop: '8em', marginLeft: '6em'}} alt="myself" />
            </Cell>

          </Grid>
        </div>
      )
    }
  }
  
  export default Landing;
  
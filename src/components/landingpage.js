import React from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends React.Component {
    render() {
      return(
        <div style={{width: '100%', margin: 'auto'}}>
          <Grid className="landing-grid">
            <Cell col={12}>
              <img
                src="https://themindsetproject.com.au/wp-content/uploads/2017/08/avatar-icon-300x300.png"
                alt="avatar"
                className="avatar-img"
                />
  
              <div className="banner-text">
                <h1>UX Designer and Content Creator</h1>
  
              <hr/>
  
            <p>Adobe Creative Suite | VSCode | Unity | Autodesk Maya | Figma</p>
  
          <div className="social-links">
  
            {/* LinkedIn */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>
  
            {/* Github */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>
  
            {/* Instagram */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
  
          </div>
              </div>
            </Cell>
          </Grid>
        </div>
      )
    }
  }
  
  export default Landing;
  
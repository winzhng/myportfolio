import React from 'react';
import { Grid, Cell, ListItem, List, ListItemContent } from 'react-mdl';
import photoMe from '../images/photoMe.png';

class About extends React.Component {
  render() {
    return(
      <div className="contact-body">
          <Grid className="contact-grid">
            <Cell col={6}>
              <h3 style={{fontFamily: 'Baskervville', fontWeight: 'bold', color: '#c3846b'}}>Winnie Zhang (she/her)</h3>
              <img src={photoMe} style={{width: '30%',  margin: 'auto', paddingTop: '1em'}} alt="myself" />
              <p style={{width: '75%',  margin: 'auto', paddingTop: '1em', color: '#c3846b'}}>3rd year Interaction Design student at George Brown College</p>
            </Cell>
            <Cell col={6}>
              <h3 style={{fontFamily: 'Baskervville', fontWeight: 'bold', color: '#c3846b'}}>Contact Me</h3>
              <hr style={{borderTop: '2px solid #c3846b', width: '50%'}}/>

            <div className="contact-list">    
              <List>
      
                <ListItem>
                  <ListItemContent style={{color: '#4c4c4c'}}>
                  <a href="http://linkedin.com/in/winnie-zhang-abba35155" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden='true' p style={{color: '#c3846b'}}/></a>
                  LinkedIn 
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{color: '#4c4c4c'}}>
                  <a href="http://instagram.com/wzhangdesign" rel="noopener noreferrer" target="_blank">
                    <i className='fa fa-instagram' aria-hidden='true' p style={{color: '#c3846b'}}/></a>
                  Instagram
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{color: '#4c4c4c'}}>
                  <a href="http://github.com/winzhng" rel="noopener noreferrer" target="_blank">
                    <i className='fa fa-github' aria-hidden='true' p style={{color: '#c3846b'}}/></a>
                  Github
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{color: '#4c4c4c'}}>
                    <i className='fa fa-phone-square' aria-hidden='true' p style={{color: '#c3846b'}}/>
                  (647)-928-9318
                  </ListItemContent>
                </ListItem>
            
                <ListItem>
                  <ListItemContent style={{color: '#4c4c4c'}}>
                      <i className='fa fa-envelope' aria-hidden='true' p style={{color: '#c3846b'}}/>
                      winniezhangdesign@gmail.com
                  </ListItemContent>
                </ListItem>
                
              </List>

            </div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default About;
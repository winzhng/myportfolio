import React from 'react';
import { Grid, Cell, ListItem, List, ListItemContent } from 'react-mdl';
import photoMe from '../images/photoMe.png';

class About extends React.Component {
  render() {
    return(
      <div className="contact-body">
          <Grid className="contact-grid">
            <Cell col={6}>
            <h3 style={{fontFamily: 'Baskervville', fontWeight: 'bold', color: '#c3846b'}}>Winnie Zhang</h3>
            <img
              src="https://themindsetproject.com.au/wp-content/uploads/2017/08/avatar-icon-300x300.png"
              alt="avatar"
              className="avatar-img"
              style={{height: '200px', paddingTop: '1em'}}/>
            <p style={{width: '75%',  margin: 'auto', paddingTop: '1em', color: '#c3846b'}}>3rd year Interaction Design student at George Brown College</p>
            </Cell>
            <Cell col={6}>
            <h3 style={{fontFamily: 'Baskervville', fontWeight: 'bold', color: '#c3846b'}}>Contact Me</h3>
            <hr style={{borderTop: '2px solid #c3846b', width: '50%'}}/>

            <div className="contact-list">    
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '16px', fontFamily: 'Anton', color: '#4c4c4c'}}>
                    <i className='fa fa-phone-square' aria-hidden='true' p style={{color: '#c3846b'}}/>
                  (123-456-7890)
                  </ListItemContent>
                </ListItem>
                
                <ListItem>
                  <ListItemContent style={{fontSize: '16px', fontFamily: 'Anton', color: '#4c4c4c'}}>
                      <i className='fa fa-fax' aria-hidden='true' p style={{color: '#c3846b'}}/>
                      (123-456-7890)
                  </ListItemContent>
                </ListItem>
                
                <ListItem>
                  <ListItemContent style={{fontSize: '16px', fontFamily: 'Anton', color: '#4c4c4c'}}>
                      <i className='fa fa-envelope' aria-hidden='true' p style={{color: '#c3846b'}}/>
                      winniezhangdesign@gmail.com
                  </ListItemContent>
                </ListItem>
                
                <ListItem>
                  <ListItemContent style={{fontSize: '16px', fontFamily: 'Anton', color: '#4c4c4c'}}>
                      <i className='fa fa-skype' aria-hidden='true' p style={{color: '#c3846b'}}/>
                      (123-456-7890)
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
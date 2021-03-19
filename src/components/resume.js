import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends React.Component {
  render() {
    return(
      <Grid className="resume">
        <Cell col={4}>
          <div style={{textAlign: 'center'}}>
            <div>
              <h3 style={{fontFamily: 'Baskervville', fontWeight: 'bold', color: '#c3846b'}}>Winnie Zhang</h3>
            </div>
          <img
              src="https://themindsetproject.com.au/wp-content/uploads/2017/08/avatar-icon-300x300.png"
              alt="avatar"
              className="avatar-img"
              style={{height: '200px'}}/>
          
          <h4 style={{color: '#c3846b'}}>UX Designer and Content Creator</h4>
          <h5 style={{color: '#c3846b'}}></h5>
          <hr style={{borderTop: '2px solid #c3846b', width: '100%'}}/>
          <h5 style={{color: '#c3846b'}}>Address</h5>
          <p>123 Fake Street, Toronto, ON</p>
          <h5 style={{color: '#c3846b'}}>Phone</h5>
          <p>123-456-7890</p>
          <h5 style={{color: '#c3846b'}}>Email</h5>
          <p>winniezhangdesign@gmail.com</p>
          <h5 style={{color: '#c3846b'}}>LinkedIn</h5>
          <p>linkedin.com</p>
          <hr style={{borderTop: '2px solid #c3846b', width: '100%'}}/>
          </div>

        </Cell>
        <Cell className="resume-right-col" col={8}>
          <h3>Education</h3>
          <Education startYear={2018} endYear={2022}
          schoolName = "George Brown College" schoolDescription = "Interaction Design and Development"/>
          <Education startYear={2014} endYear={2016}
          schoolName = "University of Waterloo" schoolDescription = "Honours Psychology and Business"/>
          
          <hr style={{borderTop: '2px solid #c3846b', width: '100%'}}/>
          
          <h3>Experience</h3>
          <Experience 
          startYear={2018} 
          endYear={2020}
          jobName = "Aritzia: A-OK Cafe" 
          jobTitle = "Barista"
          jobDescription ="• Provided exceptional customer service by greeting guests in a friendly manner, providing product education about coffee and our vendors
          • Ensuring quality control by making sure each beverage was made with consistent practices, which resulted to regular clients
          • Pouring beautiful latte art satisfied many clients, which motivated them to take photos and share on social media" />
          <Experience startYear={2016} 
          endYear={2018}
          jobName = "Kit and Ace: Sorry Cafe" 
          jobTitle = "Barista and Social Media Manager"
          jobDescription = "• Curate content and designs for cafe’s Instagram, specific branding and theme to improve aesthetics and has increased online presence with current and potential clients
          • Provided excellent customer service by greeting guests in a friendly manner and initiating conversation or giving product education
          • Ensuring quality control by making sure each beverage was made with consistent practices, which resulted to regular clients
          • Managing and organizing workshops and community events, showed an increase of interest for coffee education and tastings from our community"/>
          <Experience startYear={2010}
          endYear= "Present"
          jobName = "Freelance" 
          jobTitle = "Photography, Content Creation and Design"
          jobDescription ="• Created original and trending content in an aesthetic way, by staging with photos with good composition has led to a consistent audience and interest from brand partnerships
          • Constructing monthly content calendars to ensure consistency and regularly communicate with other influencers and industry professionals to maintain network
          • Experience with portrait photography and graphic design has earned clients in the music industry and with local businesses
          • Web design and front end development skills presented opportunities to build websites via Squarespace, Wordpress and Semplice"/>

          <hr style={{borderTop: '2px solid #c3846b', width: '100%'}}/>
          
          <h3>Skills</h3>
          <Skills
          skill="Adobe Creative Suite"
          progress={85}/>
          <Skills
          skill="Figma"
          progress={90}/>
          <Skills
          skill="Microsoft Office"
          progress={80}/>
          <Skills
          skill="Invision/Marvel/Canva"
          progress={80}/>
          <Skills
          skill="HTML"
          progress={80}/>
          <Skills
          skill="CSS"
          progress={80}/>
          <Skills
          skill="Javascript"
          progress={60}/>
          <Skills
          skill="Unity"
          progress={60}/>
          <Skills
          skill="Autodesk Maya"
          progress={60}/>
        </Cell>
      </Grid>
    )
  }
}

export default Resume;
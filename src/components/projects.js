import React from 'react';
import { Tabs, Tab, Grid, Cell, CardTitle, Card, CardText, CardActions, CardMenu, Button} from 'react-mdl';
import breeze from '../images/breeze.png';
import flux from '../images/flux.png';
import lunar from '../images/lunar.png';
import GreenGirls from '../images/GreenGirls.png';
import MCTD from '../images/MCTD.png';
import chess from '../images/chess.png';

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 };
  }
  
  toggleCategories()
  {
    if (this.state.activeTab == 0){
      return(
        <div className="projects-grid">
        {/*UI Mockups*/}
          {/*Project 1*/}
          <Card shadow={0} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#c3846b', height: '176px', background: `url(${lunar}) center / cover`}}></CardTitle>
            <CardText>
            UX Case Study — 'magnolia cafe'
            </CardText>
            <CardActions buttons>
                <a href="https://www.instagram.com/p/CEhWogrhwFS/?utm_source=ig_web_copy_link" target="_blank" rel="noreferrer">
                <Button style={{color: '#c3846b'}}>Instagram</Button>
                </a>
                <a href="http://wwww.github.com" target="_blank" rel="noreferrer">
                <Button style={{color: '#c3846b'}}>Case Study</Button></a>
            </CardActions>
          </Card>

          {/*Project 2*/}
          <Card shadow={0} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#c3846b', height: '176px', background: `url(${lunar}) center / cover`}}></CardTitle>
            <CardText>
            UI Design for a home decor web page — 'lunar'
            </CardText>
            <CardActions buttons>
                <a href="https://www.instagram.com/p/CEhWogrhwFS/?utm_source=ig_web_copy_link" target="_blank" rel="noreferrer">
                <Button style={{color: '#c3846b'}}>Instagram</Button>
                </a>
            </CardActions>
          </Card>
          
          {/*Project 3*/}
          <Card shadow={0} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${breeze}) center / cover`}}></CardTitle>
            <CardText>
                Mobile web page for a fictitious sustainable skincare and wellness brand called 'breeze'
            </CardText>
            <CardActions buttons>
                <a href="https://www.instagram.com/p/CEez6RRhj7w/?utm_source=ig_web_copy_link" target="_blank" rel="noreferrer">
                <Button style={{color: '#c3846b'}}>Instagram</Button>
                </a>
            </CardActions>
          </Card>
          
          {/*Project 4*/}
          <Card shadow={0} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${flux}) center / cover`}}></CardTitle>
            <CardText>
            'flux' — a monthly magazine subscription for adventerous souls
            </CardText>
            <CardActions buttons>
                <a href="https://www.instagram.com/p/CEmlGL2BweA/?utm_source=ig_web_copy_link" target="_blank" rel="noreferrer">
                <Button style={{color: '#c3846b'}}>Instagram</Button>
                </a>
                <a href="http://wwww.github.com" target="_blank" rel="noreferrer">
                <Button style={{color: '#c3846b'}}>N/A</Button></a>
            </CardActions>
          </Card>
        </div>
      )

      {/*Logo Design*/}
    } else if (this.state.activeTab == 1){
      return(
        <div className="projects-grid">
          {/*Project 1*/}
          <Card shadow={0} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${GreenGirls}) center / cover`}}></CardTitle>
            <CardText>
            Logo design for a Kitchener-Waterloo based thrift store, 'Green Girls'
            </CardText>
            <CardActions buttons>
                <a href="https://www.instagram.com/p/CCFEi7lhwDl/?utm_source=ig_web_copy_link" target="_blank" rel="noreferrer">
                <Button style={{color: '#c3846b'}}>Instagram</Button>
                </a>
            </CardActions>
          </Card>
          
          {/*Project 2*/}
          <Card shadow={0} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${MCTD}) center / cover`}}></CardTitle>
            <CardText>
            Logo design for a Kitchener-Waterloo based carpentry company, 'McCartney Trim and Design'
            </CardText>
            <CardActions buttons>
                <a href="https://www.instagram.com/p/CKhKdRzBkAM/?utm_source=ig_web_copy_link" target="_blank" rel="noreferrer">
                <Button style={{color: '#c3846b'}}>Instagram</Button>
                </a>
            </CardActions>
          </Card>
          
          {/*Project 3*/}
          <Card shadow={0} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px'}}></CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions buttons>
                <a href="http://wwww.github.com" target="_blank" rel="noreferrer">
                <Button colored>GitHub</Button>
                </a>
                <a href="http://wwww.github.com" target="_blank" rel="noreferrer">
                <Button colored>LiveDemo</Button></a>
            </CardActions>
          </Card>
        </div>
      )

      {/*3D Design*/}
    } else if (this.state.activeTab == 2){
      return(
        <div className="projects-grid">
          {/*Project 1*/}
          <Card shadow={0} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${chess}) center / cover`}}></CardTitle>
            <CardText>
                Geometic marble design for custom chess board, made on Autodesk Maya
            </CardText>
            <CardActions buttons>
                <a href="https://www.instagram.com/p/B_F6p7Zh2RO/?utm_source=ig_web_copy_link" target="_blank" rel="noreferrer">
                <Button style={{color: '#c3846b'}}>Instagram</Button>
                </a>
                <a href="http://wwww.github.com" target="_blank" rel="noreferrer">
                <Button style={{color: '#c3846b'}}>Case Study</Button></a>
            </CardActions>
          </Card>
          
          {/*Project 2*/}
          <Card shadow={0} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px'}}></CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions buttons>
                <a href="http://wwww.github.com" target="_blank" rel="noreferrer">
                <Button style={{color: '#c3846b'}}>GitHub</Button>
                </a>
                <a href="http://wwww.github.com" target="_blank" rel="noreferrer">
                <Button style={{color: '#c3846b'}}>LiveDemo</Button></a>
            </CardActions>
          </Card>
          
          {/*Project 3*/}
          <Card shadow={0} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px'}}></CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions buttons>
                <a href="http://wwww.github.com" target="_blank" rel="noreferrer">
                <Button style={{color: '#c3846b'}}>GitHub</Button>
                </a>
                <a href="http://wwww.github.com" target="_blank" rel="noreferrer">
                <Button style={{color: '#c3846b'}}>LiveDemo</Button></a>
            </CardActions>
          </Card>
        </div>
      )

          {/*Content Creation*/}
     } else if (this.state.activeTab == 3){
          return(
            <div className="projects-grid">
              {/*Project 1*/}
              <Card shadow={0} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: `url(${chess}) center / cover`}}></CardTitle>
                <CardText>
                    Content Creation for personal Instagram page
                </CardText>
                <CardActions buttons>
                    <a href="https://www.instagram.com/p/B_F6p7Zh2RO/?utm_source=ig_web_copy_link" target="_blank" rel="noreferrer">
                    <Button style={{color: '#c3846b'}}>View More</Button>
                    </a>
                </CardActions>
              </Card>
              
              {/*Project 2*/}
              <Card shadow={0} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: `url(${chess}) center / cover`}}></CardTitle>
                <CardText>
                Content Creation for @SorryCoffee Instagram page
                </CardText>
                <CardActions buttons>
                    <a href="http://wwww.instagram.com/sorrycoffee" target="_blank" rel="noreferrer">
                    <Button style={{color: '#c3846b'}}>GitHub</Button>
                    </a>
                </CardActions>
              </Card>
            
            </div>
          )
        }
  }
  
  
  render() {
    return(
        <div>
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>Case Studies / UI Mockups</Tab>
            <Tab>Logo Design</Tab>
            <Tab>3D Design / AR Design</Tab>
            <Tab>Content Creation</Tab>
          </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>

            </Cell>
          </Grid>



        </div>
    )
  }
}

export default Projects;
import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends React.Component {
    render() {
      return (
        <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Winnie Zhang</Link>} scroll>
              <Navigation>
                  <Link to="/projects">Projects</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">About Me</Link>
              </Navigation>
          </Header>
          <Content>
              <div className="page-content" />
              <Main>
                  
              </Main>
          </Content>
        </Layout>
        </div>
      );
    }
  }
  
  export default App;
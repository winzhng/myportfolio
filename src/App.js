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
          <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white', fontFamily: 'Baskerville', fontSize: '1.5em'}} to="/">home</Link>} scroll>
              <Navigation>
                  <Link  to="/projects" style={{fontFamily: 'Baskerville', fontSize: '1.5em'}}>projects</Link>
                  <Link  to="/aboutme" style={{fontFamily: 'Baskerville', fontSize: '1.5em'}}>about me</Link>
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
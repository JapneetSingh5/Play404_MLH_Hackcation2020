import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Container, Row, Col } from 'react-grid';

import Navbar from "./components/navbar/Navbar";
import { Header } from "./components/activities/Header";
import { CardList, MultiList, PlayList, HabitList } from "./components/activities/CardList";
import Footer from './components/footer/footer';
import InspiQuoteBox from './components/inspiQuote/quoteBox';
import Feeling from './components/feelingWidget/widget';
import Breathe from './components/breathe/widget';
import Dash from './components/dashboard/dash';
import Tasks from './components/tasks/widget';
import BoardView from './components/2048/index.js';
import Carousel from './components/carousel/carousel'
import './App.css';

import GlobalStyle from './styles/Global';

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <>
      <Router>
      <Navbar 
      navbarState={this.state.navbarOpen} 
      handleNavbar={this.handleNavbar}
    />
        <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/foryou">
              <ForYou navbarOpen={this.state.navbarOpen} handleNavbar={this.handleNavbar} />
            </Route>
            <Route exact path="/explore">
              <Explore />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/2048">
              <BoardView />
            </Route>
            <Redirect to="/home" />
        </Switch>
      </Router>
      <GlobalStyle />
      </>
    )
  }
}

export default App;

function ForYou(){
  return(
    <div>
        <div className="container">
          <Header />
          <br />
          <h1>Activities For You</h1>
          <CardList />
          <Footer />
        </div>
        </div>
  );
}


function Home() {
  return (
    <>
    <div style={{"marginTop": 100}}>
  <Carousel />
  </div>
  </>);
}

function Explore() {
  return (
            <div className="container" >
            <Header />
          <h1 style={{marginTop: 20}}>Do It Together : Multiplayer Activities</h1>
          <MultiList />
          <h1 style={{marginTop: 20}}>Inculcate a new habit, start afresh</h1>
          <HabitList />
          <h1 style={{marginTop: 20}}>Work Hard, Play Harder</h1>
          <PlayList />
          <Footer />
          </div>
          );
}

function Dashboard() {
  return (<div className="container" >
          <Header />
          <Container>
        <Row>
        <Col xs={12} sm={12} md={6}>
          <Dash />
          <Tasks />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <InspiQuoteBox />
          <Breathe />
          <Feeling />
          </Col>
          </Row>
          </Container>
          <Footer />
          </div>);
}



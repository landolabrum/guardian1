import React from 'react';
import logo from './img/logo/logo.svg';
import square_logo from './img/logo/square_logo.svg';
import M from "materialize-css";

// import 'materialize-css/dist/css/materialize.min.css'
import { Row, Col, Navbar, Modal, Button, Icon, Error, Container } from 'react-materialize';
import './App.css';
import Home from './Home';
import About from './About';
import Services from "./Services";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class Call_modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }
  render() {
    return (
      <a onClick={this.handleToggleClick}>
        {this.state.showWarning ?
          <div className="fixed-action-btn">
            <a className="btn-floating btn-large red">
              <i className="large material-icons">local_phone</i>
            </a>
          </div >
          : <Modal
            name='action'
            className='center-align'
            actions={[
              <div className="fixed-action-btn">
                <Button flat modal="close" node="button" waves="green">Close</Button>
              </div>
            ]}
            bottomSheet={false}
            fixedFooter={false}
            header="CONTACT"
            id="modal1"
            open={true}
            options={{
              dismissible: true,
              endingTop: '10%',
              inDuration: 250,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              opacity: 0.5,
              outDuration: 250,
              preventScrolling: true,
              startingTop: '4%'
            }} >
            <div class="divider" />
            <br />


            <a
            
            left
            className='btn btn-block orange text-white'
              href="tel://+14804950707"
              waves="light"
            ><Icon className='lrg'>
                    local_phone
              </Icon>
              
              
            </a>
           <h6> (480) 495-0707</h6>

<br/>

            <a

            left
            className='btn btn-block orange text-white'
              href='mailTo://larry.kohler@guardian1.life'

              waves="light"
            > <Icon>
              mail
              </Icon>
             
             
            </a>
            <h6>  larry.kohler@guardian1.life</h6> 


          </Modal>
        }
      </a>

    );
  }
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          brand={
            <Link id='logo-container' to="/">
              <img
                className='App-logo valign-wrapper'
                src={logo}
                alt="logo" />
            </Link>
          }
          centerLogo
          className='grey darken-4'>
          <div className='side_logo_container center-align'>
            <Link to="/">
              <img
                className='side_logo'
                src={square_logo}
                alt="logo" /></Link>

          </div>

          <Link to="/about">About Us </Link>
          <Link to="/Services">Products & Services</Link>
        </Navbar>

        <Call_modal />
        <header className="App-header">
          <Switch>
            <Route path="/guardian1" component={Home} exact />
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/Services" component={Services} />
            <Route component={Error} />
          </Switch>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
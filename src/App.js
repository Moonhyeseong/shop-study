/*eslint-disable*/
import React, { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Data from './data.js';
import Card from './components/card.js';
import Detail from './components/detail.js';

import { Link, Switch, Route } from 'react-router-dom';
function App() {
  let [shoes, setShoes] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Shose SHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/detail">
                Detail
              </Nav.Link>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <div className="jumbotron">
            <div className="text-area">
              <h1 className="display-4">20% Season OFF</h1>
              <p className="lead">
                This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
              </p>

              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">
                  Learn more
                </a>
              </p>
            </div>
          </div>

          <div className="container">
            <div className="row">
              {shoes.map((data, index) => {
                return <Card shoes={data} index={index} key={index} />;
              })}
            </div>
          </div>
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

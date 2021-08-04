import React, { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { NavDropdown } from 'react-bootstrap';
import '../css/Dashboard.css';
import { BsList } from 'react-icons/bs';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { BsFillBellFill } from 'react-icons/bs';

function Dashboard(){

    useEffect( () => {
        console.log('Hello use effect');
    })
    return (
        <div className="fliud-container">
            <div id="backgroundColor">
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
                    <BsList className="menuStyle" size={50}/>
                <Container>
                    <Navbar.Brand href="#home">
                        <Nav.Item className="header">Open<span className="source">Source</span>Billing</Nav.Item>    
                    </Navbar.Brand>
                </Container>
                <Container>
                    <Navbar.Brand href="#home">
                        <NavDropdown title="Action" id="nav-dropdown">
                            <NavDropdown.Item >Action</NavDropdown.Item>
                            <NavDropdown.Item >Another action</NavDropdown.Item>
                            <NavDropdown.Item >Something else here</NavDropdown.Item>
                            <NavDropdown.Item >Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Brand>
                </Container>
                    <Nav.Item>
                        <Nav.Link>
                            <BsFillBellFill size={20} color="#09b8e2"/>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="iconStyle">
                        <Nav.Link>
                            <BsFillQuestionCircleFill color="#09b8e2" size={20}/>
                        </Nav.Link>
                    </Nav.Item>
                </Navbar>
            </div>
            <div>
                <div className="profileInfo">

                </div>
            </div>
        </div>
    )
}

export default Dashboard;
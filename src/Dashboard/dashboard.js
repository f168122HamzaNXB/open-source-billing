import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { NavDropdown } from 'react-bootstrap';
import '../css/Dashboard.css';
import Image from 'react-bootstrap/Image';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { BsFillBellFill } from 'react-icons/bs';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Line } from 'react-chartjs-2';


function Dashboard(){
    const [data, setData] = useState({});
    const [option, setOption] = useState({});
    const [mount, setMount] = useState(true);

    useEffect(() => {
        if (mount){
            setData({
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                datasets: [
                    {
                        data: [0, 50, 1000, 50, 0],
                        fill: true,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgba(255, 99, 132, 0.2)',
                    },
                ],
            })
    
            setOption({
                maintainAspectRatio: true,
                responsive: true,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            }
                        }
                    ]
                },
            })            
        }
        return () => setMount(false);
        
    }, [data, option])

    return (
        <div className="fliud-container">
            <div id="backgroundColor">
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
                    <FaBars className="menuStyle" size={50}/>
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
            <Row style={{ marginTop: '1.5%' }} className="col-lg-9">
                <Col style={{ position: 'absolute' }} className="col-lg-3">
                    <div id="sideBar" className="profileInfo">
                        <div className="profileImage">
                            <Image className="userIcon" src="http://localhost:3001/images/img-user.png" roundedCircle />
                        </div>
                        <div className="profileDetails">
                            <div className="dropDown">
                                <a className="dropDownButton" href="/home">
                                    <span>OSB</span>
                                </a>
                                <a className="emailLink" href="/home">admin@opensourcebilling.org</a>
                                <a className="dropDownButton userDropdown" href="/home"> <BsThreeDotsVertical color="#fff" size={15}/> </a>
                            </div>
                        </div>
                    </div>
                    <div className="verticalBar">
                        <Nav className="flex-column">
                            <Nav.Item>
                                <Nav.Link href="/home" id="sideBarText" ><img className="iconAlign" src="http://localhost:3001/images/ico-dashboard.svg" width={25} height={25}/>Dashboard</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/home" id="sideBarText" ><img className="iconAlign" src="http://localhost:3001/images/ico-expenses.svg" width={25} height={25}/>Invoices</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/home" id="sideBarText" ><img className="iconAlign" src="http://localhost:3001/images/ico-estimates.svg" width={25} height={25}/>Estimates</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/home" id="sideBarText" ><img className="iconAlign" src="http://localhost:3001/images/ico-payments.svg" width={25} height={25}/>Payments</Nav.Link>
                            </Nav.Item>   
                            <Nav.Item>
                                <Nav.Link href="/home" id="sideBarText" ><img className="iconAlign" src="http://localhost:3001/images/ico-clients.svg" width={25} height={25}/>Clients</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/home" id="sideBarText" ><img className="iconAlign" src="http://localhost:3001/images/ico-items.svg" width={25} height={25}/>Items</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/home" id="sideBarText" ><img className="iconAlign" src="http://localhost:3001/images/ico-expenses.svg" width={25} height={25}/>Taxes</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/home" id="sideBarText" ><img className="iconAlign" src="http://localhost:3001/images/ico-reports.svg" width={25} height={25}/>Reports</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/home" id="sideBarText" ><img className="iconAlign" src="http://localhost:3001/images/ico-settings.svg" width={25} height={25}/>Settings</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </Col>
                <Col style={{ marginLeft: '12%' }}>
                    <div className="dashboardBody">
                        <h3 className="statsStyle">
                            Stats
                            <div id="radioBtn" className="btn-group">
                                <a className="btn btn-primary btn-sm intro active" 
                                data-intro="This will show each amount with its actual currency">
                                    Actual Currency
                                </a>
                                <a className="btn btn-primary btn-sm intro" 
                                data-intro="This will show the sum of amounts billed and income in base currency">
                                    Base Currency
                                </a>
                            </div>
                        </h3>
                        <div className="data-wrapper">
                            <ul className="currentData">
                                <div className="row">
                                    <div className="col m6">
                                        <h4>
                                            <a id="amount" href="">Amount Billed</a>
                                        </h4>
                                        <div className="amount">
                                            <div className="set-positions">
                                                <div>
                                                    1600.0
                                                    <span style={{ fontSize: '15px', paddingLeft: '10px' }}>USD</span>
                                                </div>
                                                <div>
                                                    1600.0
                                                    <span style={{ fontSize: '15px', paddingLeft: '10px' }}>GBP</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="amount">
                                            <h4>
                                                <a id="amount" href="">Payment</a>
                                            </h4>
                                            <div className="set-positions">
                                                <div>
                                                    1600.0
                                                    <span style={{ fontSize: '15px', paddingLeft: '10px' }}>USD</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col m6">
                                        <h4>
                                            <a id="amount" href="">YTD Income</a>
                                        </h4>
                                        <div className="amount">
                                            <div className="first-three-ytd set-positions">
                                                <div>
                                                    1600.0
                                                    <span style={{ fontSize: '15px', paddingLeft: '10px' }}>USD</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <div>
                            <h4 id="chartHeading">Invoices</h4>
                            <div className="col-md-6">
                                <Line 
                                    height={"50%"}
                                    width={"50%"}
                                    data = {data}
                                />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col style={{ marginLeft: '33%' }}>
                    <div className="invoiceList">
                        <h3 className="statsStyle">
                            Invoices
                            <div id="secondRadio" className="btn-group" >
                                <a className="btn btn-primary btn-sm intro active"
                                data-intro="This will show each amount with its actual currency">
                                    Current
                                </a>
                                <a className="btn btn-primary btn-sm intro nonActive" 
                                data-intro="This will show the sum of amounts billed and income in base currency">
                                    Past
                                </a>
                            </div>
                        </h3>
                    </div>
                </Col>
                <Col>
                    <aside id="activitySideBar" className="sideShow">
                        <h3 id="recentActivity" className="recentBorder">Recent Activity</h3>
                        <div className="activityScrollHolder mCustomScrollbar _mCS_1" style={{ overflow: 'hidden' }}>
                            <div className="mCustomScrollBox mCSLight" id="mCSB_1" 
                            style={{ position: 'relative', height: '100%', overflow: 'hidden', maxWidth: '100%' }}
                            >
                                <div className="mCSBContainer" style={{ position: 'relative', top: '0' }}>
                                    <span className="activityDate">05/05/2021</span>
                                    <ul className="activitiesList">
                                        <li style={{ marginBottom: '15px' }}>
                                            <div className="invoiceActivity">
                                                Invoice
                                            </div>
                                            <div className="activityDetails">
                                                <p>15.60
                                                    <span>(USD)</span>
                                                </p>
                                                <em className="subHeading">Sent To Mehran Cloth House</em>
                                            </div>
                                        </li>
                                        <li style={{ marginBottom: '15px' }}>
                                            <div className="invoiceActivity">
                                                Invoice
                                            </div>
                                            <div className="activityDetails">
                                                <p>15.60
                                                    <span>(USD)</span>
                                                </p>
                                                <em className="subHeading">Sent To Mehran Cloth House</em>
                                            </div>
                                        </li>
                                        <li style={{ marginBottom: '15px' }}>
                                            <div className="paymentActivity">
                                                Payment
                                            </div>
                                            <div className="activityDetails">
                                                <p>15.60
                                                    <span>(USD)</span>
                                                </p>
                                                <em className="subHeading">Sent To Mehran Cloth House</em>
                                            </div>
                                        </li>
                                    </ul>
                                    <span className="secondActivityDate">05/05/2021</span>
                                    <ul className="activitiesSecondList">
                                        <li>
                                            <div className="invoiceActivity">
                                                Invoice
                                            </div>
                                            <div className="activityDetails">
                                                <p>15.60
                                                    <span>(USD)</span>
                                                </p>
                                                <em className="subHeading">Sent To Mehran Cloth House</em>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </aside>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard;
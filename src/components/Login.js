import React from "react";
import { FcGoogle } from 'react-icons/fc';
import { BsInstagram , BsTwitter} from 'react-icons/bs';
import { GrLinkedin  } from 'react-icons/gr';
import { SiGmail} from 'react-icons/si';
import "firebase/app";
import { signInWithGoogle } from '../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { Navbar, Nav, NavDropdown, Container, Row, Col, } from "react-bootstrap";
import { ControlledCarousel } from "./carousel";
import Capture from '../images/Capture.JPG'
import '../index.css'
// import { GoogleAuthProvider , signInWithRedirect} from "firebase/app"
// import firebase from 'firebase/compat/app';
// import { getAuth } from "firebase/auth";
// const signInWithGoogle = () => {  
//  const provider = new GoogleAuthProvider();  
//  signInWithRedirect(auth, provider)  
// }


const Sign = () => {
    return (
        <div id="sign-page">
            <section id="title" >
                <div className="container-fluid">
                    <Navbar style = {{position:"fixed"}} className="navbar-expand-lg nb " collapseOnSelect expand="lg" >
                        <Container>
                            <h1 className="n-b" href="#home">LemeCon</h1>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="nav-item me-auto">
                                    <Nav.Link className="nav-link" href="#features">Features</Nav.Link>
                                    <Nav.Link className="nav-link" href="#pricing">Pricing</Nav.Link>
                                    <NavDropdown  className="nav-link-pro" title="Product" id="collasible-nav-dropdown">
                                        <NavDropdown.Item  href="#">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link className="nav-link" href="#footer">Contact Us</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <Container className="inbetween-section" >
                    <Row xs lg="2">
                        <Col className="rc" >
                            <Row><h1 className="heading-big" >Meet new and interesting dogs nearby.</h1></Row>
                            <Row  className="but-row" xs lg="2" ><Button onClick={signInWithGoogle} variant="outline-dark " className="login-button" > <FcGoogle className="g-icon" /> Sign in with Google</Button></Row>
                        </Col>
                        <Col><img src={Capture} height={400} width={600} alt="imahge" className='heading-img' />
                        </Col>
                    </Row>
                </Container>
            </section >

            <section id="pics">
                <ControlledCarousel />
            </section>

            <section id="pricing">

                <h2 class="section-heading" >A Plan for Every Social Enthusiast</h2>
                <p>Simple and affordable price plans for you.</p>

                <div class="pricing-row row">
                    <div class="pricing-col col-lg-4 col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="pricing-card-header-heading">Normal</h3>
                            </div>
                            <div class="card-body">
                                <h2 class="price-heading" >Free</h2>
                                <p>10 Messages Per Day</p>
                                <p>Unlimited App Usage</p>
                                {' '}
                                <button onClick={signInWithGoogle} class="btn btn-lg btn-block btn-outline-dark" type="button"><FcGoogle className="g-icon" />Sign Up</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="pricing-card-header-heading" >Premium</h3>
                            </div>
                            <div class="card-body">
                                <h2 class="price-heading" >$49 / mo</h2>
                                <p>Unlimited Messages</p>
                                <p>Unlimited App Usage</p>
                                <button class="btn btn-lg btn-primary" type="button">Sign Up</button>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-4 col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="pricing-card-header-heading" >Premium+</h3>
                            </div>
                            <div class="card-body">
                                <h2 class="price-heading" >$99 / mo</h2>
                                <p>Pirority Listing</p>
                                <p>Unlimited Messages</p>
                                <p>Unlimited App Usage</p>
                                <button class="btn btn-lg btn-block btn-primary" type="button">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



{/* //Footer Section\ */}
            <footer id="footer">
                <i class="footer-icon "><BsTwitter className='g-icon' /></i>
                <i class="footer-icon ">< GrLinkedin className='g-icon'/></i>
                <i class="footer-icon "> <BsInstagram className='g-icon' /> </i>
                <i class="footer-icon ">< SiGmail className='g-icon'/></i>

                <p>© Copyright LemeCon</p>
            </footer>
{/* Footer finishes */}
        </div >
    );
}

export default Sign;
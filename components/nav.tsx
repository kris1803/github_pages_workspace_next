import React from 'react';
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function MyNavbar(): JSX.Element {

   return (
      <Container fluid as={'header'}>
         <Row className="justify-content-center bg-dark shadow">
            <Col xs={12} lg={8} >
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                  <Container>
                     <Link href='/' className='navbar-brand' passHref>
                        <Navbar.Brand className="navbar-brand" >Kris</Navbar.Brand>
                     </Link>
                     
                     <Navbar.Toggle
                        aria-controls="responsive-navbar-nav" />
                     <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                           <Link aria-current="page" passHref href="/projects"><a className="nav-link">Projects</a></Link>
                           <Link href="/hard-skills" passHref ><a className="nav-link">HardSkills</a></Link>
                           <Link href="/about" passHref ><a className="nav-link">About</a></Link>
                        </Nav>

                        <Nav className="navbar-nav py-1">
                           <a className="nav-link text-decoration-none p-0" href="https://github.com/kris1803" target='_blank' rel="noreferrer" >
                              <Image src="/img/github_logo.png" className="rounded-circle" alt="Kris1803" width="40" height="40" />
                           </a>
                        </Nav>
                     </Navbar.Collapse>
                  </Container>
               </Navbar>
            </Col>
         </Row>
      </Container>
   )
}
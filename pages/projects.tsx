import { useMemo } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { motion } from "framer-motion";

import Head from 'next/head';
import MyNavbar from '../components/nav';
import projects from '../data/projects.json';
import variants from '../data/page-animation';

const Projects: NextPage = () => {

   const projectComponents = useMemo(() => {
      return projects.map((project, index) => {
         let description = project.description.slice(0, 100) + '...';
         return (
            <Col xs={12} sm={6} md={4} xl={3} key={index}>
               <Card className="mb-3">
                  <div className="ratio ratio-16x9">
                     <Card.Img variant="top" src={project.img} alt='project screenshot' />
                  </div>
                  <Card.Body>
                     <Card.Title>{project.name}</Card.Title>
                     <Card.Text className="m-0 p-0" >{description}</Card.Text>
                     <Card.Text ><span className="fw-bold">Language:</span> {project.lang}</Card.Text>
                     <Link scroll={false} href={'/project/' + (index + 1)} passHref>
                        <Button variant="outline-success" >Open</Button>
                     </Link>
                  </Card.Body>
               </Card>
            </Col>
         )
      });
   }, [])

   return (
      <>
         <Head>
            <title>Kristians portfolio - Projects</title>
            <meta name="google-site-verification" content="08SOpCyv4brbpxXNvAC69k8E-hA4H32L3y7KBaeDdpU" />
            <meta name="theme-color" content="#000000" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="title" content="Kristians Portfolio - Projects" />
            <meta
               name="description"
               content="Fullstack JavaScript developper with a focus on React and React Native. Projects page."
            />
            <meta name="og:title" content="Kristians Portfolio - Projects" />
            <meta
               name="og:description"
               content="Fullstack JavaScript developper with a focus on React and React Native. Projects page."
            />
            <meta name="og:image" content="/img/assets/site_screenshot.png" />
            <meta name="og:url" content="https://kris1803.github.io/" />
            <meta name="og:type" content="website" />
            <meta property="og:locale" content="en_GB" />
         </Head>
         <MyNavbar />

         <motion.main
            initial="hidden"
            animate="enter"
            exit='exit'
            variants={variants}
            transition={{ type: 'linear' }}
            className='mainBackground mainContainer text-center pt-5 m-0 p-0 d-flex flex-column align-items-center'
         >

            <h1>Projects</h1>
            <h5>Portfolio accessible at: <a href='https://github.com/kris1803' target='_blank' rel="noreferrer"  >Github</a></h5>
            <Row className="m-0 p-0 mt-3 justify-content-center">
               <Col xs={12} md={10} lg={10} xl={9} >
                  <Row className="m-0 p-0 justify-content-center">
                     {projectComponents}
                  </Row>
               </Col>
            </Row>
         </motion.main>
      </>
   )
}

export default Projects;
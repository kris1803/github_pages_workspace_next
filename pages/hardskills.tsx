import type { NextPage } from 'next';
import Head from 'next/head';
import MyNavbar from '../components/nav';
import { Row, Col } from 'react-bootstrap';

const HardSkills: NextPage = () => {
   const frontend = [
      'React (functional components)',
      'Redux',
      'React-Bootstrap/Bootstrap',
      'Jquery',
      'React-Native (Expo)',
      'Material-UI',
      'Next.js',
      'axios'
   ];
   const backend = [
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
   ]
   const production = [
      'Git & Github',
      'Github pages',
      'Heroku',
      'Netlify',
      'Vercel',
      'Kanban Agile',
      'Raspberry Pi',
   ]

   return (
      <>
         <Head>
            <title>Kristians portfolio - Hardskills</title>
            <meta name="google-site-verification" content="08SOpCyv4brbpxXNvAC69k8E-hA4H32L3y7KBaeDdpU" />
            <meta name="theme-color" content="#000000" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="title" content="Kristians Portfolio - Hardskills" />
            <meta
               name="description"
               content="Fullstack JavaScript developper with a focus on React and React Native. Hardskills page."
            />
            <meta name="og:title" content="Kristians Portfolio - Hardskills" />
            <meta
               name="og:description"
               content="Fullstack JavaScript developper with a focus on React and React Native. Hardskills page."
            />
            <meta name="og:image" content="/img/assets/site_screenshot.png" />
            <meta name="og:url" content="https://kris1803.github.io/" />
            <meta name="og:type" content="website" />
            <meta property="og:locale" content="en_GB" />
         </Head>
         <MyNavbar />
         <main className='mainBackground mainContainer p-0 d-flex flex-column justify-content-center align-items-center'>
            <Row className='w-100' >
               <Col xs={12} className="text-center mb-3">
                  <h1>Hard Skills</h1>
               </Col>
               <Col xs={12} lg={6} className='text-center' >
                  <h3>Frontend</h3>
                  {frontend.map((skill, index) => {
                     return (
                        <p key={index} className='fw-bold'>{skill}</p>
                     )
                  })}
               </Col>
               <Col xs={12} lg={6} className='text-center' >
                  <h3>Backend</h3>
                  {backend.map((skill, index) => {
                     return (
                        <p key={index} className='fw-bold'>{skill}</p>
                     )
                  })}
               </Col>
               <Col xs={12} className="text-center mb-3">
                  <h3>Production</h3>
                  {production.map((skill, index) => {
                     return (
                        <p key={index} className='fw-bold'>{skill}</p>
                     )
                  })}
               </Col>
            </Row>

         </main>
      </>
   )
}

export default HardSkills;
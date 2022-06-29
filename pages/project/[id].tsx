import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import Head from 'next/head';
import { motion } from "framer-motion";

import projects from '../../data/projects.json';
import MyNavbar from '../../components/nav';
import variants from '../../data/page-animation';

const Project: NextPage = () => {
   const router = useRouter();
   let valid = false;
   let query = router.query;
   let id = parseInt(query.id as string);
   valid = !isNaN(id) && id > 0 && id <= projects.length;
   let project: any = {};
   if (valid) {
      // do project extraction here
      id = id - 1;
      // picking the right project from the json file
      project = projects[id];
   }

   return (
      <>
         <Head>
            <title>Kristians portfolio - Project</title>
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
            className='mainBackground mainContainer d-flex flex-column align-items-center justify-content-center p-0 m-0'
         >
            {!valid && <h1 className='text-center'>Not valid project number.</h1>}
            {valid && (
               <Row className='mx-0 mb-3 p-0 w-100 bg-white' style={{ maxWidth: 1280, borderRadius: 40 }}>
               <Col xs={12} className='d-flex justify-content-center align-items-center' style={{ height: 80, backgroundColor: '#eee', borderRadius: 40 }}>
                  <h3 className='m-0 p-0'>{project.name}</h3>
               </Col>
               <Col xs={12} className='mt-3 mb-3'>
                  <Row className='m-0 p-0 flex-row-reverse'>
                     <Col xs={12} lg={6}>
                        <Image unoptimized src={project.img} layout='responsive' width='1920' height='980' className='img-fluid rounded-3' alt='Project screenshot' />
                     </Col>
                     <Col xs={12} lg={6} className='pt-3 pb-3 d-flex align-items-center'>
                        <p style={{ fontSize: 14 }}>{`${project.description}`}</p>
                     </Col>
                     <Col xs={12} className='mt-3 mb-3'>
                        <div className='d-flex'>
                           <Image unoptimized src='/img/assets/language.png' width='28' height='25' layout='fixed' alt='' />
                           <p className='my-0 ms-2 p-0' >Language : {project.lang}</p>
                        </div>
                        <div className='d-flex mt-3'>
                           <Image unoptimized src='/img/assets/stack.png' layout='fixed' width='28' height='25' alt='' />
                           <p className='my-0 ms-2 p-0'>Technologies : {project.stack.join(', ')}</p>
                        </div>
                     </Col>
                  </Row>
               </Col>
            </Row> )}
         </motion.main>
      </>
   )
}

export default Project;
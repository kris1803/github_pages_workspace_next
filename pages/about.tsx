import type { NextPage } from 'next';
import Head from 'next/head';
import { motion } from "framer-motion";

import MyNavbar from '../components/nav';
import variants from '../data/page-animation';

const About: NextPage = () => {

   return (
      <>
         <Head>
            <title>Kristians portfolio - About</title>
            <meta name="theme-color" content="#000000" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="title" content="Kristians Portfolio" />
            <meta
               name="description"
               content="Fullstack JavaScript developper with a focus on React and React Native"
            />
            <meta name="og:title" content="Kristians Portfolio" />
            <meta
               name="og:description"
               content="Fullstack JavaScript developper with a focus on React and React Native"
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
            className='mainBackground mainContainer text-center pt-5' >

            <h1>About me</h1>
            <h4>I can create and deploy your frontend application or website.</h4>
            <p>This website is made with nextJs framework, and is optimised for SEO.</p>
            <p className="mt-5">Icons used from <a target='_blank' rel='noreferrer' href="https://icons8.com">https://icons8.com</a> to make this website</p>

         </motion.main>
      </>
   )
}

export default About;
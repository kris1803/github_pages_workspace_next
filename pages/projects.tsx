import type { NextPage } from 'next';
import Head from 'next/head';
import MyNavbar from '../components/nav';

const Projects: NextPage = () => {

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
         <main className='mainBackground mainContainer'>

         </main>
      </>
   )
}

export default Projects;
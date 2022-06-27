import type { NextPage } from 'next';
import Head from 'next/head';
import MyNavbar from '../components/nav';

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
         <main className='mainBackground mainContainer text-center'>

            <h1>About me</h1>
            <p>I can create and deploy your frontend application or website.</p>
            <p className="mt-5">Icons used from <a href="https://icons8.com">https://icons8.com</a> to make this website</p>

         </main>
      </>
   )
}

export default About;
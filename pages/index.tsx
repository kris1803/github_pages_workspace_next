import type { NextPage } from 'next';
import Head from 'next/head';
import { Button } from '@mui/material';

import MyNavbar from '../components/nav';
import Link from 'next/link';

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Kristians portfolio</title>
        <meta name="google-site-verification" content="08SOpCyv4brbpxXNvAC69k8E-hA4H32L3y7KBaeDdpU" />
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
      <main className={"mainBackground mainContainer d-flex flex-column align-items-center p-0 m-0 text-center"}>
        <h1 className="mt-5">Home</h1>
        <h2>Kristians</h2>
        <h3>Javascript Fullstack Software Engineer</h3>
        <h3>Web & mobile</h3>
        <h5>React & React Native</h5>
        <h4>Focus on frontend applications.</h4>
        <Link href='/projects' passHref style={{ color:'#fff' }}><a><Button variant="contained" >See Projects</Button></a></Link>
        
      </main>
    </>
  )
}

export default Home

import React from "react";
import MyNavbar from "../components/nav";
import Head from 'next/head';
import { NextPage } from "next";
import Link from 'next/link';
import { Button } from "react-bootstrap";


const Error: NextPage = () => {

   return (
      <>
         <Head>
            <title>Oops. Page Not found.</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="title" content="Page not found - Kristians Portfolio" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <MyNavbar />
         <main className="mainBackground mainContainer text-center d-flex flex-column align-items-center" >
            <h1 style={{ marginTop: 50 }} >
               Sorry... Page was not found.
            </h1>
            <Link href='/' style={{}} passHref><Button className="mt-2">Go Home</Button></Link>
         </main>
      </>
   )
}
export default Error;
import React from "react";
import MyNavbar from "../components/nav";
import Head from 'next/head';

export default function Error(): JSX.Element {

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
         <main className="mainBackground mainContainer" >
            <h1 style={{ textAlign: 'center', marginTop: 50 }} >
               Sorry... Page was not found.
            </h1>
         </main>
      </>
   )
}
import * as React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return     <div className={styles.container}>
      <Head>
        <title>MK Nextjs Test project</title>       
      </Head>

      <main className={styles.main}>       

        <p className={styles.description}>
         This is a test project to get familiar with NextJs.
         <br/>
         For more information visit <a href="/about" target="_blank">About page</a>.
        </p>
        <p>For static pages that load same data every time, example page is <a className="link" href="/staticProps" target="_blank">This page</a></p>
        <p>For static pages with dynamic links visit  <a className="link" href="/todos/1" target="_blank">This page</a> </p>
        <p>For server side rendering on each request  visit  <a className="link" href="/todos-server-side/1" target="_blank">This page</a> </p>
         </main>

    
    </div>
  
}

import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return     <div className={styles.container}>
      <Head>
        <title>MK Nextjs Test project</title>       
      </Head>

      <main className={styles.main}>       

        <p className={styles.description}>
         This is a test project to get familiar with NextJs.        
      
        </p>
        <p>For static pages that load same data every time, example page is <Link href="/staticProps"><a className="link"> This page </a></Link></p>
        <p>For static pages with dynamic links visit  <Link href="/todos/1"><a className="link">This page</a></Link> </p>
        <p>For server side rendering on each request  visit  <Link href="/todos-server-side/1"><a className="link">This page</a></Link>  </p>
         </main>

    
    </div>
  
}

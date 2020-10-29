import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import styles from   '../../styles/header.module.css'
function MainLayout({children,title='Next App'}) {
    return (
        <React.Fragment>
              <Head>
                <title>
                    {title}
                </title>
            </Head>
            <nav className={styles.navBar}>
                <Link  href='/'><a className={styles.navBar__links}>Main</a></Link>
                <Link  href='/basket'><a className={styles.navBar__links}>Basket</a></Link>
              
            </nav>
            <main>
                {children}
            </main>
          
          
        </React.Fragment>
    )
}

export default MainLayout

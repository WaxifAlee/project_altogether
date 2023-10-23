import Head from "next/head"

import {Navbar, Footer} from "../components"
import styles from "../styles/donate.module.scss"

const donate = () => {
  return (
    <>

        <Head>
            <title>Contact Us</title>
            <meta
            name="description"
            content="Get in contact with us. You can contact us by either filling out the form or sending an email or message on the given addresses manually."
            />
        </Head>
    
        <Navbar />
        
        <div className={styles.container}>

        </div>

        <Footer />
    </>
  )
}

export default donate;
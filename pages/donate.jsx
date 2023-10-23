import { useState, useEffect } from "react"
import Head from "next/head"

import {Navbar, Footer} from "../components"
import { FaAngleDoubleDown } from "react-icons/fa"
import styles from "../styles/Donate.module.scss"

const donate = () => {

    const message = [<h2>Hi!</h2>, <p>Thank You For Your Kind Concern {"<3"}</p>];
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect( () => {
        const timer = setTimeout( () => {
            setMessageIndex(1);
        }, 5000);

        return () => clearTimeout(timer);
    }, [messageIndex] )

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
                <div>
                    { message[messageIndex] }
                </div>
                <div>
                    <FaAngleDoubleDown />
                </div>
        </div>

        <Footer />
    </>
  )
}

export default donate;
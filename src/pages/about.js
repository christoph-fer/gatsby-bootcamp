import React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>I currently work full-time at Volv Media.</p>
            <p>Want to work with me? <Link to="/contact">Reach out!</Link></p>
        </Layout>
    )
}

export default AboutPage
import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata {
                    title
                }
            }
        }
    `)

    return(
        <header className={headerStyles.header}>
            <h1>
                <AniLink fade to="/" className={headerStyles.title}>
                    {data.site.siteMetadata.title}
                </AniLink>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <l1>
                        <AniLink swipe top="entry" entryOffset={100} to="/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Home</AniLink>
                    </l1>
                    <l1>
                        <AniLink cover direction="up" bg="#FFEEE8" to="/blog" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Blog</AniLink>
                    </l1>
                    <l1>
                        <AniLink paintDrip color="white" to="/about" paintDrip className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About</AniLink>
                    </l1>
                    <l1>
                        <AniLink fade to="/contact" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Contact</AniLink>
                    </l1>
                </ul>
            </nav>
        </header>
    )
}

export default Header
import React from 'react';
import {useStaticQuery, graphql} from 'gatsby'

const Footer = () => {
    const data = useStaticQuery(graphql`
       query{
            site{
                siteMetadata{
                    author
                }
            }
       }
    `)
    return(
    <p>This is footer component made by {data.site.siteMetadata.author}</p>
    )
}

export default Footer;
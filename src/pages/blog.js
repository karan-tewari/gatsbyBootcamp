import React from 'react';
import Layout from '../components/Layout';
import {gatsby, useStaticQuery, graphql} from 'gatsby';

const Blog = () => {
    let data = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
          edges{
            node{
              frontmatter{
                title
                date
              }
              excerpt
              html
            }
          }
        }
      }
    `)
    return(
        <Layout>
            <ol>
                {data.allMarkdownRemark.edges.map(x => {
                    return(
                        <li key={x.node.frontmatter.title}>
                    <h2>{x.node.frontmatter.title}</h2>
                    <p>{x.node.frontmatter.date}</p>
                </li>
                    )
                })}
                
            </ol>
        </Layout>
    )
}

export default Blog;
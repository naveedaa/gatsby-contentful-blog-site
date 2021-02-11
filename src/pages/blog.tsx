import React from 'react'
import { useStaticQuery, graphql, navigate } from "gatsby";
import Layout from '../components/Layout/Layout'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Button,
  CardActions,
  Grid,
  makeStyles,
  createStyles
} from "@material-ui/core";

const useStyle = makeStyles((theme) => createStyles({
  root: {
    padding: '125px 125px',
  },
  title: {
    fontWeight: 'bolder',
    fontSize: '12px',
  },
  date: {
    color: 'gray',
    fontSize: '13px',
  },
  explore: {
    color: 'gray',
    fontWeight: 'bolder',
  },
}))

const Blog = () => {
  const classes = useStyle()
  const data = useStaticQuery(
    graphql`
    query{
  allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
    nodes {
      slug
      title
      publishedDate(formatString: "DD MMMM , YYYY")
      body {
        raw
      }
      featuredImage {
        description
        file {
          url
        }
        fluid {
          src
        }
      }
    }
  }
  }
  `);

  // console.log(data)
  return (
    <div>
      <Layout>
        <Grid container spacing={3} className={classes.root}>
          {data.allContentfulBlogPost.nodes.map((node, i) => {
            return (
              <Grid item xs={12} sm={12} md={4} key={node.slug}>
                <Card
                  style={{ border: '1px solid grey' }}
                >
                  <CardActionArea>
                    {/* {console.log(node)} */}
                    <CardMedia
                      key={i}
                      component="img"
                      alt={node.featuredImage.description}
                      height="300"
                      image={node.featuredImage[0].file.url}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography
                        className={classes.title}
                        gutterBottom
                        component="h2"
                      >
                        {node.title}
                      </Typography>
                      <Typography
                        className={classes.date}
                        gutterBottom
                        component="h2"
                      >
                        {node.publishedDate}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      className={classes.explore}
                      variant='outlined'
                      style={{ borderRadius: '20px' }}
                      onClick={() => navigate(`/blog/${node.slug}`)}
                    >
                      Explore...
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Layout>
    </div>
  )
}

export default Blog;
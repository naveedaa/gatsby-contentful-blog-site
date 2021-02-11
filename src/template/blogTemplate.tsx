import { Container, Box, Typography, Button, makeStyles, createStyles } from "@material-ui/core";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import React from "react";
import Layout from "../components/Layout/Layout";

const useStyle = makeStyles((theme) => createStyles({
    root: {
        overflow: 'hidden',
        width: '100%'
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap: 'wrap',
        color: '#11171A',
        marginTop: '20vh',
        alignContent: 'center',
        marginLeft: '10%',
        marginRight: '10%',

    },
    title: {
        fontSize: '60px',
        fontWeight: 1000,
        paddingTop: '25px',
        paddingBottom: '25px',
        textAlign: 'center',
        [theme.breakpoints.down("sm")]: {
            fontSize: '35px',

        }
    },
    imgBox: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        [theme.breakpoints.down("sm")]: {
            justifyContent: 'center',
            alignContent: 'center',
        }
    },
    mainImg: {
        height: '70vh',
        width: '70vw',
        [theme.breakpoints.down("sm")]: {
            height: '50vh',
            width: '90vw'
        }
    },
    date: {
        paddingTop: '10px',
        fontWeight: 'lighter',
        fontSize: '17px',
        fontStyle: 'italic'
    },
    line: {
        marginTop: '20px',
        marginBottom: '25px',
        height: '2px',
        backgroundColor: 'gray'
    },
    richText: {
        color: 'black',
        marginTop: '20px',
        lineHeight: '1.8rem',
        fontSize: '1rem',
    },
}))

export default function blogTemplate({ pageContext }) {
    const { blogDetails } = pageContext;
    const classes = useStyle()
    return (
        <Layout>
            <Container maxWidth="md">
                <Box className={classes.root}>
                    <Box className={classes.main}>
                        <Typography className={classes.title} variant="h2" gutterBottom>
                            {blogDetails.title}
                        </Typography>

                        <Box className={classes.imgBox}>
                            <img
                                className={classes.mainImg}
                                src={blogDetails.featuredImage[0].file.url}
                                alt={blogDetails.featuredImage.description}
                            />
                        </Box>
                        <Box>
                            <Typography variant='h5' className={classes.date}>
                                Published Date: {blogDetails.publishedDate}
                            </Typography>
                        </Box>
                        <div className={classes.line}></div>
                        <Box>
                            <Box>
                                <Typography
                                    className={classes.richText}
                                    variant="h1"
                                    gutterBottom
                                >
                                    {renderRichText(blogDetails.body)}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Layout>
    );
}
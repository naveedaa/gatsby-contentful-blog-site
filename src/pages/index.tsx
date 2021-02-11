import React from 'react';
import { createStyles, makeStyles, Grid, Typography} from '@material-ui/core';
import Layout from '../components/Layout/Layout';
import Img from '../styles/main.jpg';

const useStyle = makeStyles((theme) => createStyles({
content: {
  marginTop: '100px',
  marginBottom: '50px',
  width: '50%',
  margin: '0 auto',
  display: 'flex',
  [theme.breakpoints.down('xs')]: {
    height: '50%',
    width: '50%',
  }
},
para: {
  fontFamily: 'Courier',
  fontWeight: 'bold',
  letterSpacing: '3px',
  textAlign: 'center',
  lineHeight: '25px'
},
  img: {
    borderRadius: '5px',
    [theme.breakpoints.down('xs')]: {
      height: '100%',
      width: '100%'
    }
  },
}))

const indexPage = () => {
  const classes = useStyle()
  return ( 
      <Layout>
        <div className={classes.img} style={{ width: '100%' }}>
          <Grid container>
            <Grid>
              <img width='100%' height='650vh'
                src={Img}
              />
            </Grid>
            <Grid className={classes.content}>
              <Typography className={classes.para}>
                It’s a big wide world out there.
                A world of cultural charms and natural wonders; of mega-cities and remote outposts; of paths to cross and lessons to learn; of limitless kindness and harsh realities.
                We travel to have fun.
                Anywhere We Roam is the story of our travels.
                It’s a big wide world out there, come see it with us.
              </Typography>
            </Grid>
          </Grid>
        </div>  
    </Layout>
  );
};

export default indexPage;
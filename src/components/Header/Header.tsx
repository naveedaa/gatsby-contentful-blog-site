import React, { FC, Fragment, useState } from 'react';
import { navigate } from "gatsby";
import {
    AppBar,
    Button,
    IconButton,
    Slide,
    Toolbar,
    useScrollTrigger,
    Box,
    makeStyles,
    createStyles,
    Typography,
    
  } from '@material-ui/core';
import Logo from '../../styles/Logo.png';
import styles from './Header.module.css';

const useStyles: any = makeStyles((theme) =>
  createStyles({
    header: {
      height: 'fit-content',
      boxShadow: 'none',
    },
    menu: {
      color: 'white',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#fff',
      fontWeight: 700,
      [theme.breakpoints.down("sm")]: {
        width: '100%'
      }
    },
    iconText: {
      fontSize: '20px',
      fontWeight: 'bold',
      letterSpacing:'0.3px',
      [theme.breakpoints.down("sm")]: {
        marginLeft: '-17px'
      },
    },
    buttons: {
      color: 'white',
      fontWeight: 'bold',
      width: 275,
      display: 'flex',
      justifyContent: 'space-around',
      [theme.breakpoints.down("sm")]: {
        height: '35px',
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: '20px',
      }
    }
  })
);
  
const HideOnScroll: FC<any> = ({ children }) => {
    const trigger = useScrollTrigger();
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  };

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <Fragment>
              <HideOnScroll>
                <AppBar position='fixed' className={styles.img}>
                  <Toolbar className={classes.toolbar}>
                    <IconButton style={{paddingLeft:'50px', backgroundColor:'transparent'}}
                      onClick={() => navigate('/')}
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                    >
                        <Typography variant='h5' className={classes.iconText}>
                          <img className={styles.im} src={Logo} alt=' ' />
                        </Typography>
                    </IconButton>
                    <Box className={classes.buttons} >
                        <Button variant='text' onClick={()=> navigate('/blog')}>Blogs</Button>
                    </Box>
                  </Toolbar>
                </AppBar>
              </HideOnScroll>
            </Fragment>
        </div>
  );
};       

export default Header
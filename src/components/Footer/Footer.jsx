import React from 'react';
import { Paper, Container, IconButton, Typography } from '@mui/material';
import { GitHub, Work } from '@mui/icons-material';
import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.footer} sx={{marginBottom: '0'}}>
      <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="body1">
            Made with <span role="img" aria-label="heart">❤️</span> by Rishabh Sharma
          </Typography>
          <IconButton
            color="primary"
            aria-label="GitHub"
            component="a"
            href="https://github.com/rishabh0111/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub fontSize="large" />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="Portfolio"
            component="a"
            href="https://rishabh-sharma.simple.ink/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Work fontSize="large" />
          </IconButton>
      </Container>
    </Paper>
  );
};

export default Footer;

import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { Content } from '../Content';
import { CardHeader } from '@material-ui/core';
import { useStyles } from './footer.styles';
import ImageGithub from '../../../assets/fonts/images/github.png';

const Footer = () => {
  const classes = useStyles();
  return (
    <Content className={classes.content_footer}>
      <Box
        component='img'
        src={ImageGithub}
        className={classes.image_github}
      />
      <Grid
        item
        xs={12}
      >
        <CardHeader
          titulo='2023'
          // texto='Choque Aguirre'
          color='transparent'
          font='white'
        />
      </Grid>{' '}
      <Box
        component='img'
        src={ImageGithub}
        className={classes.image_github}
      />
    </Content>
  );
};

export default Footer;

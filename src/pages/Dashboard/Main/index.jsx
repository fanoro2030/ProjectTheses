import React from 'react';
import { Box } from '@material-ui/core';
import PageBody from '../../../components/common/PageBody';
import PageHeader from '../../../components/common/PageHeader';
import { useStyles } from './main.styles';
const Main = () => {
  const classes = useStyles();
  return (
    <Box>
      <PageHeader title='Sistema de Acondicionamiento de Semillas' />
      <PageBody>
        <Box className={classes.content_body}>
          <h1>Bienvenido</h1>
          <p>Plant Betanzos</p>
          <h1>Bienvenido</h1>
          <p>Plant Betanzos</p>

          <h1>Bienvenido</h1>
          <p>Plant Betanzos</p>
        </Box>
      </PageBody>
    </Box>
  );
};

export default Main;

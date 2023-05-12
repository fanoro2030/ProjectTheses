import React from 'react';
import { Box } from '@material-ui/core';
import PageBody from '../../../components/common/PageBody';
import { useStyles } from './rates_seeds.styles';

const RatesSeeds = () => {
  const classes = useStyles();
  return (
    <Box>
      <PageBody>
        <Box className={classes.content_body}>
          <h1>
            Tarifas y Precios por servicios prestados en el Acondicionamiento de
            Semillas
          </h1>
          <p>Instituto Nacional de Innovacion Agropecuaria Forestal Potsi</p>
        </Box>
      </PageBody>
    </Box>
  );
};

export default RatesSeeds;

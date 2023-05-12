import React from 'react';
import { Box } from '@material-ui/core';
import PageBody from '../../../../components/common/PageBody';
import { useStyles } from './seedling.styles';

const Seedling = () => {
  const classes = useStyles();
  return (
    <Box>
      <PageBody>
        <Box className={classes.content_body}>
          <h1>Productores Semilleristas</h1>
          <p>Instituto Nacional de Innovacion Agropecuaria Forestal Potsi</p>
        </Box>
      </PageBody>
    </Box>
  );
};

export default Seedling;

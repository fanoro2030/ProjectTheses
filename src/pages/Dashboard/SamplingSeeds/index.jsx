import React from 'react';
import { Box } from '@material-ui/core';
import PageBody from '../../../components/common/PageBody';
import { useStyles } from './sampling_seeds.styles';

const SamplingSeeds = () => {
  const classes = useStyles();
  return (
    <Box>
      <PageBody>
        <Box className={classes.content_body}>
          <h1>Muestreo de Semillas</h1>
          <p>Instituto Nacional de Innovacion Agropecuaria Forestal Potsi</p>
        </Box>
      </PageBody>
    </Box>
  );
};

export default SamplingSeeds;

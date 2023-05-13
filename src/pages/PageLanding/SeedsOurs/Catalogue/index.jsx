import React from 'react';
import { Box, Typography } from '@material-ui/core';
import PageBody from '../../../../components/common/PageBody';
import PageHeader from '../../../../components/common/PageHeader';
import { useStyles } from './catalogue.styles';
const Catalogue = () => {
  const classes = useStyles();
  return (
    <Box>
      <PageHeader title='Catalogue' />
      <PageBody>
        <div className={classes.content_body}>
          <Typography variant='h5'>Catalogo</Typography>
        </div>
      </PageBody>
    </Box>
  );
};

export default Catalogue;

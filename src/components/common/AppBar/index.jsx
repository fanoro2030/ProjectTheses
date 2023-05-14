import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Hidden, Grid } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { useStyles } from './app_bar.styles';
import CustomButton from '../../controls/CustomButton';

const CustomAppBar = ({ data, position, ...props }) => {
  const classes = useStyles({ position });

  const [openIndex, setOpenIndex] = useState(-1);

  const handleItemClick = (index, hasSubRoutes, url) => {
    if (hasSubRoutes) {
      setOpenIndex(openIndex === index ? -1 : index);
    } else if (index !== openIndex || !hasSubRoutes) {
      setOpenIndex(-1);
      props.history.push(url);
    }
  };

  let renderData = data?.map((item, index) => {
    return (
      <CustomButton
        key={index}
        label={item.name}
        href={item.url}
        subRoutes={item.subRoutes}
        open={openIndex === index}
        onItemClick={() => handleItemClick(index, !!item.subRoutes, item.url)}
        setOpen={(value) => setOpenIndex(value ? index : -1)}
      />
    );
  });

  return (
    <AppBar
      position='fixed'
      className={props.appBar}
    >
      <Toolbar>
        <Hidden mdUp>
          <IconButton
            color='inherit'
            aria-label='Open drawer'
            edge='end'
            onClick={() => props.handleDrawerToggle()}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Hidden smDown>
          <Grid className={classes.horizontalList}>{renderData}</Grid>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;

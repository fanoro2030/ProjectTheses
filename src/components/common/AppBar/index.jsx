import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Grid,
  Box,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { useStyles } from './app_bar.styles';
import ListItems from '../Listitems';
import { Content } from '../Content';

const CustomAppBar = ({ data, position, ...props }) => {
  const classes = useStyles({ position });

  const [openIndex, setOpenIndex] = useState(-1);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  let renderData = data?.map((item, index) => {
    const { name, url, subRoutes } = item;
    console.log(item);
    return (
      <ListItems
        key={index}
        item={{ name, url, subRoutes }}
        open={openIndex === index}
        onItemClick={() => handleItemClick(index)}
        setOpen={(value) => setOpenIndex(value ? index : -1)}
        root={classes.root}
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
          <Content className={classes.root}>
            <Grid className={classes.horizontalList}>{renderData}</Grid>
          </Content>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;

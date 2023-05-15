import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Grid,
  Box,
  Drawer,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { useStyles } from './app_bar.styles';
import ListItems from '../Listitems';
import { Content } from '../Content';

const CustomAppBar = ({ data, position, ...props }) => {
  const classes = useStyles({ position });

  const [openIndex, setOpenIndex] = useState(-1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const toggleDrawer = (open) => (event) => {
    setIsDrawerOpen(open);
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
        expanded={classes.expanded}
        selected={classes.selected}
        ListItem={classes.ListItem}
        listItemText={classes.listItemText}
      />
    );
  });

  return (
    <>
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
              onClick={toggleDrawer(true)}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <Grid className={classes.horizontalList}>
              <Content className={classes.root}>{renderData}</Content>
            </Grid>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor='left'
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Content className={classes.root}>{renderData}</Content>
      </Drawer>
    </>
  );
};

export default CustomAppBar;

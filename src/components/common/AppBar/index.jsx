import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Hidden,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { useStyles } from './app_bar.styles';
import ListItems from '../Listitems';

const CustomAppBar = ({ data, position, ...props }) => {
  const history = useHistory();

  const handleMenuClick = (url) => {
    history.push(url);
  };

  const classes = useStyles({ position });

  const [openIndex, setOpenIndex] = useState(-1);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  let renderData = data?.map((item, index) => {
    return (
      <ListItems
        key={index}
        item={item}
        open={openIndex === index}
        onItemClick={() => handleItemClick(index)}
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
        <div className={classes.horizontalList}>{renderData}</div>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;

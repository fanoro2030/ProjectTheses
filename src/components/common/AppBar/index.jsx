import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Hidden, Grid } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { useStyles } from './app_bar.styles';
import ListItems from '../Listitems';
import Controls from '../../controls/Controls';
const CustomAppBar = ({
  data,
  position,
  anchorEl,
  isPrivateRoute,
  ...props
}) => {
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
        anchorEl={anchorEl}
        hideIcon={true}
        hideExpandIcon={true}
        {...classes}
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
        {isPrivateRoute && (
          <Controls.Button
            text='Cerrar Sesión'
            type='submit'
            href='/presentation'
            variant='outlined'
            color='orange'
            hover='#bea024'
          />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;

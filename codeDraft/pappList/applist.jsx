/*import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

import { useStyles } from './list_items.styles';

const ListItems = ({
  item,
  open,
  collapsed,
  setOpen,
  onItemClick,
  ...props
}) => {
  const { pathname } = useLocation();
  const classes = useStyles();
  const hasSubRoutes = Array.isArray(item.subRoutes);
  const handleClick = () => {
    if (hasSubRoutes) {
      setOpen(!open);
    } else {
      setOpen(false);
    }
    onItemClick(); // Llamar a la función onClick del componente padre para actualizar el estado del botón padre
  };

  const isSelected = !hasSubRoutes && pathname === item.url;
  const { root, expanded, selected, listItem, listItemText } = props;
  return (
    <div
      className={`${classes.root} ${root}  ${
        hasSubRoutes && open ? classes.expanded : expanded || ''
      } ${isSelected ? classes.selected : selected || ''}`}
    >
      <ListItem
        button
        className={`${classes.listItem} ${listItem}`}
        onClick={handleClick}
        disableGutters
      >
        <Box
          component={!hasSubRoutes ? Link : 'div'}
          to={`${item.url}`}
          className={`${classes.listLink} ${
            collapsed ? classes.listLinkCollapsed : ''
          }`}
        >
          <ListItemIcon className={classes.listIcon}>
            {(item.icon && <item.icon />) || ''}
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: collapsed ? classes.listItemText : listItemText || '',
            }}
          >
            {item.name}
          </ListItemText>
          {hasSubRoutes &&
            (open ? (
              <ExpandLess fontSize={collapsed ? 'inherit' : 'default'} />
            ) : (
              <ExpandMore fontSize={collapsed ? 'inherit' : 'default'} />
            ))}
        </Box>
      </ListItem>{' '}
      {hasSubRoutes && (
        <Collapse
          in={open}
          timeout='auto'
          unmountOnExit
        >
          <List disablePadding>
            {item.subRoutes.map((nestedItem, i) => (
              <ListItems
                key={i}
                item={nestedItem}
                open={open}
                collapsed={collapsed}
                setOpen={setOpen}
                onItemClick={onItemClick}
              />
            ))}
          </List>
        </Collapse>
      )}
    </div>
  );
};

export default ListItems;
///////////////
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
        expanded={classes.expanded}
        selected={classes.selected}
        ListItem={classes.ListItem}
        listItemText={classes.listItemText}
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
          <Grid className={classes.horizontalList}>
            <Content className={classes.root}>{renderData}</Content>
          </Grid>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;*/

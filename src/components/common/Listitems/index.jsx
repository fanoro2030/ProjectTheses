import React, { useState } from 'react';
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
import clsx from 'clsx';
import { useStyles } from './list_items.styles';

const ListItems = ({
  item,
  open,
  collapsed,
  onClick,
  parentOpen,
  setParentOpen,
}) => {
  const { pathname } = useLocation();
  const classes = useStyles();
  const hasSubRoutes = Array.isArray(item.subRoutes);

  const handleClick = () => {
    if (hasSubRoutes) {
      onClick(); // Llamar a la función onClick del componente padre para actualizar el estado del botón padre
      if (!open && parentOpen) {
        setParentOpen(false);
      }
    } else {
      if (parentOpen) {
        setParentOpen(false);
      }
    }
  };

  const isSelected = !hasSubRoutes && pathname === item.url;

  return (
    <div
      className={clsx(
        classes.root,
        hasSubRoutes && open && classes.expanded,
        isSelected && classes.selected
      )}
    >
      <ListItem
        button
        className={clsx(classes.listItem)}
        onClick={handleClick}
        disableGutters
      >
        <Box
          component={!hasSubRoutes ? Link : 'div'}
          to={`${item.url}`}
          className={clsx(
            classes.listLink,
            collapsed && classes.listLinkCollapsed
          )}
        >
          <ListItemIcon className={classes.listIcon}>
            {(item.icon && <item.icon />) || ''}
          </ListItemIcon>
          <ListItemText
            classes={{ primary: collapsed ? classes.listItemText : '' }}
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
                onClick={() => {
                  onClick(); // Llamar a la función onClick del componente padre para actualizar el estado del botón padre
                }}
                parentOpen={open}
                setParentOpen={setParentOpen}
              />
            ))}
          </List>
        </Collapse>
      )}
    </div>
  );
};

export default ListItems;

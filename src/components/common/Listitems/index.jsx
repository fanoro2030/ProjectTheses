import React from 'react';
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

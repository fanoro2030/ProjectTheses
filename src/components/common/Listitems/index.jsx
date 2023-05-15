import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Popover,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

import { useStyles } from './list_items.styles';

const ListItems = ({
  item,
  open,
  collapsed,
  setOpen,
  onItemClick,
  handleButtonClick,
  handleClose,
  isSidebar = false,
  anchorEl,
  ...props
}) => {
  const { pathname } = useLocation();
  const classes = useStyles();
  const hasSubRoutes = Array.isArray(item.subRoutes);
  const handleClick = () => {
    if (hasSubRoutes) {
      if (isSidebar) {
        setOpen(!open);
      } else {
        setOpen(true);
      }
    } else {
      setOpen(false);
    }
    onItemClick();
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
          onClick={(e) => {
            if (hasSubRoutes) {
              if (isSidebar) {
                setOpen(!open);
              } else {
                handleClick();
              }
            }
          }}
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
      </ListItem>
      {hasSubRoutes && isSidebar && (
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
                isSidebar={isSidebar}
              />
            ))}
          </List>
        </Collapse>
      )}
      {hasSubRoutes && !isSidebar && (
        <Popover
          open={open && anchorEl !== null}
          anchorEl={anchorEl}
          onClose={() => setOpen(false)}
          anchorOrigin={{
            horizontal: 'center',
          }}
          transformOrigin={{
            horizontal: 'center',
          }}
          className={classes.popover}
          classes={{
            paper: props.paper,
          }}
        >
          <List disablePadding>
            {item.subRoutes.map((nestedItem, i) => (
              <ListItems
                key={i}
                item={nestedItem}
                collapsed={collapsed}
                setOpen={setOpen}
                onItemClick={onItemClick}
                isSidebar={isSidebar}
              />
            ))}
          </List>
        </Popover>
      )}
    </div>
  );
};

export default ListItems;

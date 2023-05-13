import React from 'react';
import { useLocation } from 'react-router-dom';
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

const ListItems = ({ item, collapsed, parentOpen, setParentOpen, onItemClick }) => {
  const { pathname } = useLocation();
  const classes = useStyles();
  //hook/////////////////////////
  const [open, setOpen] = React.useState(false);
  const hasSubRoutes = Array.isArray(item.subRoutes);

  const handleClick = () => {
    if (item.subRoutes) {
      setOpen(!open);
      if (collapsed && open) {
        setParentOpen(false);
      }
    } else {
      onItemClick();
    }
  };

  const handleParentOpen = () => {
    if (!open && parentOpen) {
      setParentOpen(false);
    } else if (!parentOpen) {
      setParentOpen(true);
    }
  }
  React.useEffect(() => {
    if (pathname.search(new RegExp(item.url, 'g')) !== -1) {
      setOpen(true);
    }
  }, [pathname, item.url]);
  //hook convert/////////////////////////
  return (
    <div
      className={clsx(
        classes.root,
        hasSubRoutes && open && classes.expanded,
        pathname.search(new RegExp(item.url, 'g')) !== -1 &&
          !hasSubRoutes &&
          classes.selected
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
      </ListItem>

      {hasSubRoutes&& (
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List disablePadding>
            {item.subRoutes.map((nestedItem, i) => {
              return (
                <ListItems key={i} 
                item={nestedItem}
                 collapsed={collapsed}
                 open={open}
                onItemClick={onItemClick}
                  onClick={handleParentOpen}
                parentOpen={open}
                setParentOpen={setOpen}/>
              );
            })}
          </List>
        </Collapse>
      )}
    </div>
  );
};

export default ListItems;
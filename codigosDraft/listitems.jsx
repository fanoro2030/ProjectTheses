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
import clsx from 'clsx';
import { useStyles } from './list_items.styles';

const ListItems = ({ item, collapsed }) => {
  const { pathname } = useLocation();
  const classes = useStyles();
  //hook/////////////////////////
  const [open, setOpen] = React.useState(false);
  const nested = typeof item.navigationData == 'object' ? true : false;

  const handleClick = () => {
    setOpen(!open);
  };

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
        nested && open && classes.expanded,
        pathname.search(new RegExp(item.url, 'g')) !== -1 &&
          !nested &&
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
          component={!nested ? Link : 'div'}
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
          {nested &&
            (open ? (
              <ExpandLess fontSize={collapsed ? 'inherit' : 'default'} />
            ) : (
              <ExpandMore fontSize={collapsed ? 'inherit' : 'default'} />
            ))}
        </Box>
      </ListItem>

      {nested && (
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List disablePadding>
            {item.navigationData.map((nestedItem, i) => {
              return (
                <ListItems key={i} item={nestedItem} collapsed={collapsed} />
              );
            })}
          </List>
        </Collapse>
      )}
    </div>
  );
};

export default ListItems;
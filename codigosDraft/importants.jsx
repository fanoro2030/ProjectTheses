import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box,List, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core';
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
  onItemClick,
}) => {
  const { pathname } = useLocation();
  const classes = useStyles();
  const hasSubRoutes = Array.isArray(item.subRoutes);
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedParent, setSelectedParent] = React.useState(null);
  const handleClick = () => {
    if (hasSubRoutes) {
      setIsOpen(!isOpen);
      if (collapsed && isOpen) {
        if (parentOpen) {
          handleParentOpen();
          setSelectedParent(item.name);
        }
      }
      onClick();
    } else {
      onItemClick();
    }
  };
  
  const handleParentOpen = () => {
    if (!isOpen && parentOpen) {
      setParentOpen(false);
    } else if (!parentOpen) {
      setParentOpen(true);
    }
  };
  
  const isSelected = !hasSubRoutes && pathname === item.url;

  React.useEffect(() => {
    if (open === false) {
      setIsOpen(false);
    }
  }, [open]);

  React.useEffect(() => {
    if (selectedParent !== item.name && isOpen) {
      setIsOpen(false);
    }
  }, [selectedParent]);

  return (
    <div
      className={clsx(
        classes.root,
        hasSubRoutes && open && classes.expanded,
        isSelected && classes.selected
      )}
    >
     <ListItem button className={clsx(classes.listItem)} onClick={handleClick} disableGutters>
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
          in={isOpen}
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
                onClick={handleParentOpen}
                parentOpen={isOpen}
                setParentOpen={setIsOpen}
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
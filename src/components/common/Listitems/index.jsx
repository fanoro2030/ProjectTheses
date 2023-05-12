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

const ListItems = ({
  item,
  open,
  collapsed,
  onClick,
  parentOpen,
  setParentOpen,
  handleNonNestedItemClick,
}) => {
  const { pathname } = useLocation();
  const classes = useStyles();
  const hasSubRoutes = Array.isArray(item.subRoutes);
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    if (hasSubRoutes) {
      onClick();
      setIsOpen(!isOpen); // Actualizar el estado local `isOpen` en lugar de pasar la prop `open` del botón padre
      if (!isOpen && parentOpen) {
        setParentOpen(false);
      }
    } else {
      if (parentOpen && !isOpen) {
        // agregar comprobación para no cerrar el botón padre si ya está cerrado
        setParentOpen(false);
      }
      handleNonNestedItemClick();
    }
    if (!hasSubRoutes && parentOpen) {
      setParentOpen(false);
    }
  };

  const isSelected = !hasSubRoutes && pathname === item.url;

  React.useEffect(() => {
    if (open === false) {
      setIsOpen(false);
    }
  }, [open]);

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
            (isOpen ? (
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
                open={isOpen}
                collapsed={collapsed}
                onClick={() => {}}
                parentOpen={isOpen}
                setParentOpen={setIsOpen}
                handleNonNestedItemClick={onClick}
              />
            ))}
          </List>
        </Collapse>
      )}
    </div>
  );
};

export default ListItems;

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

const ListItems = ({ item, collapsed, onClose }) => {
  const { pathname } = useLocation();
  const classes = useStyles();

  const [open, setOpen] = React.useState(() => {
    return item.selected ? { [item.url]: true } : {};
  });

  const [selected, setSelected] = React.useState(item.selected ? item.url : '');
  const [selectedNested, setSelectedNested] = React.useState('');
  const [activeButton, setActiveButton] = React.useState(null);
  const [nestedOpen, setNestedOpen] = React.useState({});
  const nested = typeof item.subRoutes === 'object';
  const handleNestedClick = (url) => {
    const newNestedOpen = updateNestedOpen(url);
    setSelectedNested(newNestedOpen[url] ? url : '');
    setNestedOpen(newNestedOpen);
  };

  const updateNestedOpen = (url, isOpen) => {
    const newNestedOpen = { ...nestedOpen };
    Object.keys(nestedOpen).forEach((key) => {
      if (nestedOpen[key] && key !== url && key !== selectedNested) {
        newNestedOpen[key] = false;
      }
    });
    newNestedOpen[url] = isOpen;
    return newNestedOpen;
  };

  const handleClick = (url) => {
    setActiveButton(item.url);

    const newOpen = { ...open };
    const isOpen = newOpen[url];

    if (nested) {
      // Cierra todos los botones anidados abiertos excepto el que se está haciendo clic
      setNestedOpen(updateNestedOpen(url, !isOpen));
      setSelectedNested(isOpen ? '' : url);
    } else {
      // Cierra todos los botones anidados abiertos
      setNestedOpen(updateNestedOpen(item.url, false));
    }

    // Actualiza el estado del botón principal
    newOpen[url] = !isOpen;

    setOpen(newOpen);
    setSelected(url);
    onClose && onClose();
  };

  React.useEffect(() => {
    const isSelected = pathname.search(new RegExp(item.url, 'g')) !== -1;
    if (item.selected !== isSelected) {
      item.selected = isSelected;
      setOpen(isSelected ? { [item.url]: true } : {});
    }
    if (nested) {
      const selectedNestedItem = item.subRoutes.find((subItem) =>
        pathname.includes(subItem.url)
      );
      if (selectedNestedItem) {
        setSelectedNested(selectedNestedItem.url);
        setNestedOpen({ [item.url]: true, [selectedNestedItem.url]: true });
      }
    }
  }, [pathname, item, item.url, item.selected, nested]);

  return (
    <div
      className={clsx(
        classes.root,
        nested && open[item.url] && classes.expanded,
        !nested && item.selected && classes.selected
      )}
    >
      <ListItem
        button
        className={clsx(classes.listItem)}
        onClick={() => handleClick(item.url)}
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
            {item.icon && <item.icon />}
          </ListItemIcon>
          <ListItemText
            classes={{ primary: collapsed ? classes.listItemText : '' }}
          >
            {item.name}
          </ListItemText>
          {nested &&
            (open[item.url] ? (
              <ExpandLess fontSize={collapsed ? 'inherit' : 'default'} />
            ) : (
              <ExpandMore fontSize={collapsed ? 'inherit' : 'default'} />
            ))}
        </Box>
      </ListItem>

      {nested && (
        <Collapse
          in={open[item.url]}
          timeout='auto'
          unmountOnExit
        >
          <List disablePadding>
            {item.subRoutes.map((subItem, i) => (
              <ListItems
                key={i}
                item={subItem}
                onClick={() => handleNestedClick(subItem.url)}
              />
            ))}
          </List>
        </Collapse>
      )}
    </div>
  );
};

export default ListItems;

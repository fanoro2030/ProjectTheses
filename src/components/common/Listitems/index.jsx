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

  const [open, setOpen] = React.useState(
    item.selected ? { [item.url]: true } : {}
  );
  const [selected, setSelected] = React.useState(item.selected ? item.url : '');
  const [selectedNested, setSelectedNested] = React.useState('');
  const [activeButton, setActiveButton] = React.useState(null);
  const [nestedOpen, setNestedOpen] = React.useState({});
  const nested = typeof item.subRoutes === 'object';

  const handleClick = (url) => {
    setActiveButton(item.url);

    const newOpen = { ...open };
    const isOpen = newOpen[url];

    if (nested) {
      // Si el botón actual es anidado, cierra todos los botones anidados abiertos excepto el que se está haciendo clic
      Object.keys(nestedOpen).forEach((key) => {
        if (nestedOpen[key] && key !== url && key !== selectedNested) {
          newOpen[key] = false;
          setNestedOpen({
            ...nestedOpen,
            [key]: false,
          });
        }
      });
      // Actualiza el estado del botón anidado actual
      newOpen[url] = !isOpen;
      setSelectedNested(isOpen ? '' : url);
      setNestedOpen({
        ...nestedOpen,
        [url]: !isOpen,
      });
    } else {
      // Si el botón actual no es anidado, cierra todos los botones anidados abiertos
      Object.keys(nestedOpen).forEach((key) => {
        if (nestedOpen[key] && key !== item.url && key !== url) {
          newOpen[key] = false;
          setNestedOpen({
            ...nestedOpen,
            [key]: false,
          });
        }
      });
      // Actualiza el estado del botón principal
      newOpen[url] = !isOpen;

      // Si el botón actual es un botón de nivel superior, cierra todos los botones anidados abiertos
      if (!isOpen) {
        Object.keys(open).forEach((key) => {
          if (nestedOpen[key]) {
            newOpen[key] = false;
            setNestedOpen({
              ...nestedOpen,
              [key]: false,
            });
          }
        });
      }
    }

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
  }, [pathname, item, item.url, item.selected]);

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
            {item.subRoutes.map((nestedItem, i) => {
              return (
                <ListItems
                  key={i}
                  item={nestedItem}
                  onClick={() => {
                    handleClick(item.url);
                    setNestedOpen({
                      ...nestedOpen,
                      [item.url]: false,
                    });
                  }}
                />
              );
            })}
          </List>
        </Collapse>
      )}
    </div>
  );
};

export default ListItems;

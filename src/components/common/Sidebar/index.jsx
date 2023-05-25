import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { List } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ListItems from '../Listitems';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { useStyles } from './sidebar_navigation.styles';

const SidebarNavigation = ({ data, collapsed, ...props }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const hideExpandIcon = isMobile ? true : props.hideExpandIcon;
  const [openIndex, setOpenIndex] = useState(-1);

  const handleItemClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  let renderData = data?.map((item, index) => {
    return (
      <ListItems
        key={index}
        item={item}
        open={openIndex === index}
        onItemClick={() => handleItemClick(index)}
        setOpen={handleItemClick}
        isSidebar={true}
        hideExpandIcon={hideExpandIcon}
      />
    );
  });

  return (
    <Drawer
      variant={props.variant}
      classes={{
        paper: props.drawerPaper,
      }}
      anchor={props.anchor}
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
      <div className={classes.toolbar} />
      <Divider />
      <List
        className={classes.list}
        component='nav'
      >
        {renderData}
      </List>
    </Drawer>
  );
};

export default SidebarNavigation;

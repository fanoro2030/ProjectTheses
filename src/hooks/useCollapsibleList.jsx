import React, { useState } from "react";
import { Collapse, List } from "@material-ui/core";

const CollapsibleList = ({ open, items }) => {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List disablePadding>{items}</List>
    </Collapse>
  );
};

export default CollapsibleList;

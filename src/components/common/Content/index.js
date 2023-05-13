import React from "react";

export const Content = ({ children, className, ...restProps }) => {
  return (
    <div className={`${className} common-content`} {...restProps}>
      {children}
    </div>
  );
};

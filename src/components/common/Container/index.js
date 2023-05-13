import React from "react";

export const Container = ({ children, className, ...restProps }) => {
  return (
    <div className={`${className} common-container`} {...restProps}>
      {children}
    </div>
  );
};

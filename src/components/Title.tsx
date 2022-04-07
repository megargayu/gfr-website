import React from "react";

const Title: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => (
  <h1 className={"text-3xl sm:hsm:text-5xl font-semibold tracking-title text-white text-center " + className} {...props}>
    {children}
  </h1>
);

export default Title;

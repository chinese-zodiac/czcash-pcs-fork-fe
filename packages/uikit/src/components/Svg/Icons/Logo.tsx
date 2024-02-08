import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return <img src="/logo.png" alt="CZ.CASH Logo" {...props} />;
};

export default Icon;

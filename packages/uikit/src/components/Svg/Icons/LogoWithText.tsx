import { useTheme } from "@pancakeswap/hooks";
import React from "react";
import { SvgProps } from "../types";

const Logo: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  const { theme, isDark } = useTheme();
  return <img src={`/images/nav-title-${isDark ? "dark" : "light"}.png`} alt="CZ.CASH Logo" {...props} />;
};

export default Logo;

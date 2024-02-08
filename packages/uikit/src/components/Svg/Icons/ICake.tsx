import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#822025" : "#EEEAF4";
  const secondaryColor = theme.isDark ? "#e7d1d1" : "#ab5959";

  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="12" fill={primaryColor} />
      <g clipPath="url(#clip0_42_1080)">
        <path
          d="M18.6 9.92667L17.9 7.01333C17.7533 6.41333 17.2333 6 16.6267 6H15.1533H13.8133H12.6667H11.3333H10.1867H8.84H7.36667C6.76667 6 6.24 6.42 6.1 7.01333L5.4 9.92667C5.24 10.6067 5.38667 11.3 5.81334 11.8467C5.86667 11.92 5.94 11.9733 6 12.04V16.6667C6 17.4 6.6 18 7.33334 18H16.6667C17.4 18 18 17.4 18 16.6667V12.04C18.06 11.98 18.1333 11.92 18.1867 11.8533C18.6133 11.3067 18.7667 10.6067 18.6 9.92667ZM8.68 7.33333L8.29334 10.5733C8.24 11.0067 7.89334 11.3333 7.48667 11.3333C7.16 11.3333 6.95334 11.14 6.86667 11.02C6.69334 10.8 6.63334 10.5133 6.7 10.24L7.36667 7.33333H8.68ZM16.6067 7.32667L17.3067 10.24C17.3733 10.52 17.3133 10.8 17.14 11.02C17.0467 11.14 16.8467 11.3333 16.5133 11.3333C16.1067 11.3333 15.7533 11.0067 15.7067 10.5733L15.32 7.33333L16.6067 7.32667ZM14.34 10.3467C14.3733 10.6067 14.2933 10.8667 14.12 11.06C13.9667 11.2333 13.7533 11.3333 13.48 11.3333C13.0333 11.3333 12.6667 10.94 12.6667 10.46V7.33333H13.9733L14.34 10.3467ZM11.3333 10.46C11.3333 10.94 10.9667 11.3333 10.4733 11.3333C10.2467 11.3333 10.04 11.2333 9.88 11.06C9.71334 10.8667 9.63334 10.6067 9.66 10.3467L10.0267 7.33333H11.3333V10.46ZM16 16.6667H8C7.63334 16.6667 7.33334 16.3667 7.33334 16V12.6467C7.38667 12.6533 7.43334 12.6667 7.48667 12.6667C8.06667 12.6667 8.59334 12.4267 8.98 12.0333C9.38 12.4333 9.91334 12.6667 10.52 12.6667C11.1 12.6667 11.62 12.4267 12.0067 12.0467C12.4 12.4267 12.9333 12.6667 13.5333 12.6667C14.0933 12.6667 14.6267 12.4333 15.0267 12.0333C15.4133 12.4267 15.94 12.6667 16.52 12.6667C16.5733 12.6667 16.62 12.6533 16.6733 12.6467V16C16.6667 16.3667 16.3667 16.6667 16 16.6667Z"
          fill={secondaryColor}
        />
      </g>
    </Svg>
  );
};

export default Icon;

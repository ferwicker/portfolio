import React from "react";

import { useTheme } from "../../context/ThemeContext";

import css from './SVGIcon.module.scss';
import getSVG from "./getSVG";

const SVGIcon = ({name = 'moon', size = 24}) => {
  const theme = useTheme() ? 'dark' : 'light';

  return (
    <span 
      className={[css.svgIcon, css[theme]].join(' ')} 
      style={{
        width: `${size}px`,
        minWidth: `${size}px`,
      }}
    >
      <svg
        className={css.svg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        {getSVG(name)}
      </svg>
    </span>
  )
};

export default SVGIcon;

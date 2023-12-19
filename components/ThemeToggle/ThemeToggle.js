import React from "react";

import SVGIcon from '../SVGIcon/SVGIcon'
import { useTheme, useThemeUpdate } from "../../context/ThemeContext";

import css from './ThemeToggle.module.scss';

const ThemeToggle = () => {
  const theme = useTheme() ? 'dark' : 'light';
  const toggleTheme = useThemeUpdate();

  return (
    <button onClick={toggleTheme} className={css.toggleButton}>
      <div className={[css.toggleInner, css[theme]].join(' ')}>
        <div className={[css.circle, css[theme]].join(' ')} />
        <div className={css.themeIcons}>
          <SVGIcon name="sun" size={20} />
          <SVGIcon name="moon" size={20}  />
        </div>
      </div>
    </button>
  )
};

export default ThemeToggle;

import React from "react";

import css from './Logo.module.scss';

const Logo = () => {
  const scrollOpts = {
    duration: 500,
    smooth: true,
  }

  const scrollTop = () => {
    if (typeof window !== 'undefined') {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    }
  }

  return (
    <button onClick={scrollTop} className={css.logo}>
      // Fernanda Gilbert
    </button>
  )
}

export default Logo;

import React from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../../context/ThemeContext';

import Logo from '../Logo/Logo';

import css from './Nav.module.scss';

const Nav = () => {
  const [showNav, setShowNav] = React.useState(false);
  const theme = useTheme() ? 'dark' : 'light';
  const navRef = React.createRef(null);

  const getScrollPosition = () => {
    if (window.scrollY > window.innerHeight * 0.7) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', getScrollPosition);

    return () => {
      window.removeEventListener('scroll', getScrollPosition);
    }
  },[]);

  React.useEffect(() => {
    if (!navRef.current) return;

    if (showNav) {
      navRef.current.classList.add(css.show)
    } else {
      navRef.current.classList.remove(css.show)
    }
    
  }, [showNav]);

  return (
    <div ref={navRef} className={[css.navContainer, css[theme]].join(' ')}>
      <Logo />
      <div className={css.navLinksContainer}>
        <Link className={css.navLink} to="about" smooth={true}>
          <button className={css.navButton}>About</button>
        </Link>
        <Link className={css.navLink} to="work" smooth={true}>
          <button className={css.navButton}>Experience</button>
        </Link>
        <Link className={css.navLink} to="contact" smooth={true}>
          <button className={css.navButton}>Contact</button>
        </Link>
      </div>
    </div>
  )
}

export default Nav;

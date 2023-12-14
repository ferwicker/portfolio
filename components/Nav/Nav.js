import React from 'react';
import Logo from '../Logo/Logo';
import css from './Nav.module.scss';

const Nav = () => {
  const [showNav, setShowNav] = React.useState(false);

  const navRef = React.createRef(null);

  const getScrollPosition = () => {
    if (window.scrollY > window.innerHeight * 0.8) {
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
    <div ref={navRef} className={[css.navContainer].join(' ')}>
      <Logo />
      <div className={css.navLinksContainer}>
        {/* <button className={css.navLink}>About</button>
        <button className={css.navLink}>Work</button>
        <button className={css.navLink}>Contact</button> */}
      </div>
    </div>
  )
}

export default Nav;

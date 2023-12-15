import React from "react";

import css from './Main.module.scss';

const Main = ({children}) => {
  const mainRef = React.useRef(null);
  const theme = 'dark';

  const getMousePosition = (event) => {
    if (!mainRef.current) return;
    const { clientX, clientY } = event;
    mainRef.current.style.setProperty('--x', `${clientX}px`);
    mainRef.current.style.setProperty('--y', `${clientY}px`);
  };

  const getTouchPosition = (event) => {
    if (!mainRef.current) return;
    const { clientX, clientY } = event.touches[0];
    mainRef.current.style.setProperty('--x', `${clientX}px`);
    mainRef.current.style.setProperty('--y', `${clientY}px`);
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', getMousePosition);
    window.addEventListener('touchmove', getTouchPosition);

    return () => {
      window.removeEventListener('mousemove', getMousePosition);
      window.removeEventListener('touchmove', getTouchPosition);
    }
  },[]);

  return (
    <main className={css[theme]} ref={mainRef} >
      <div className={[css.background, css[theme]].join(' ')} />
      {children}
    </main>
  )
}

export default Main;

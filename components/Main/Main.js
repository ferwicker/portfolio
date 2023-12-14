import React from "react";

import css from './Main.module.scss';

const Main = ({children}) => {
  const mainRef = React.useRef(null);

  const getMousePosition = (event) => {
    if (!mainRef.current) return;
    const { clientX, clientY } = event;
    mainRef.current.style.setProperty('--x', `${clientX}px`);
    mainRef.current.style.setProperty('--y', `${clientY}px`);
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', getMousePosition);

    return () => {
      window.removeEventListener('mousemove', getMousePosition);
    }
  },[]);

  return (
    <main ref={mainRef} >
      <div className={css.background} />
      {children}
    </main>
  )
}

export default Main;

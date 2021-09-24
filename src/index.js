import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const Carousel = (props) => {
  const [slide, setSlide] = useState(0);
  const { height, width } = useWindowDimensions();
  const { responsive = {
    large: {
      toShow: 5,
      toSlide: 5
    },
    desktop: {
      toShow: 4,
      toSlide: 4
    },
    ipad: {
      toShow: 3,
      toSlide: 3
    },
    mobile: {
      toShow: 2,
      toSlide: 2
    }
  } } = props;
  
  let size = width > 1200 ? "large" : width > 1000 ? "desktop" : width > 800 ? "ipad" : "mobile";
  let toSlide = responsive[size].toSlide;
  let toShow = responsive[size].toShow;
  const total = React.Children.toArray(props.children).length;
  let key = 1.0
  const updateSlide = (val) => {
    setSlide(Math.min(total - toShow, Math.max(0, slide + val)));
  }
  useEffect(() => {
  }, [slide]);
  return (
    <ul className={styles.carousel}>
      {(slide > 0) && (<span className={styles["left-arrow"]} onClick={() => { updateSlide(-toSlide) }}>{"<"}</span>)}
      {React.Children.toArray(props.children).map(c => {
        return <li key={key++} className={styles.item} style={{ flex: `0 0 calc(92% / ${toShow})`, transform: `translateX(calc(${-100 * slide}% - ${10 * slide}px))` }}>{c}</li>
      })}
      {total - toShow > slide && <span className={styles["right-arrow"]} onClick={() => { updateSlide(toSlide) }}>{">"}</span>}
    </ul>
  );
}
export default Carousel;
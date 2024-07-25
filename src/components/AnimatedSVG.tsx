import React, { useEffect } from 'react';
import Vivus from 'vivus';

const AnimatedSVG = () => {
  useEffect(() => {
    new Vivus('my-svg', {
      duration: 200,
      file: '/hurricane-alt-svgrepo-com.svg', // 正しいパスを指定
      type: 'oneByOne', // アニメーションのタイプを指定
      animTimingFunction: Vivus.EASE
    }, () => {
      console.log('Animation completed');
    });
  }, []);

  return (
    <div id="my-svg-container">
      <svg id="my-svg" viewBox="0 0 100 100" width="200" height="200"></svg>
    </div>
  );
};

export default AnimatedSVG;

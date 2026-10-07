import { forwardRef } from 'react';
import { cx } from 'tailmantic';
import './slider.styles.js';

const Slider = forwardRef(function Slider({ className, ...props }, ref) {
  return <input {...props} ref={ref} type="range" className={cx('rgi-slider', className)} />;
});

export default Slider;

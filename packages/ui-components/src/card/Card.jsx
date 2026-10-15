import { createElement, forwardRef } from 'react';
import { cx } from 'tailmantic';
import './card.styles.js';

const Card = forwardRef(function Card(
  {
    as: Component = 'article',
    children,
    className,
    elevation = 1,
    interactive = false,
    variant = 'elevated',
    ...props
  },
  ref,
) {
  return createElement(
    Component,
    {
      ...props,
      ref,
      className: cx(
        'tm-card',
        `tm-card-${variant}`,
        `tm-card-elevation-${elevation}`,
        interactive && 'tm-card-interactive',
        className,
      ),
    },
    children,
  );
});

export default Card;

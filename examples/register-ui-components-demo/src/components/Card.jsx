import { createElement, forwardRef } from 'react';
import { cx } from 'tailmantic';

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
        'ui-card',
        `ui-card-${variant}`,
        `ui-card-elevation-${elevation}`,
        interactive && 'ui-card-interactive',
        className,
      ),
    },
    children,
  );
});

export default Card;

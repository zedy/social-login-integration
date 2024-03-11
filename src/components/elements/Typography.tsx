// libs
import React from 'react';

// utils
import classParser from '../../utils/class-parser';

// typefaces
export enum Type {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p',
  SPAN = 'span',
}

// defaults
const DEFAULT_TEXT_SIZE = 'text-base';

/**
 * General typography component.
 * Use this component to create a typography element such
 * as h1, h2, h3, h4, h5, h6, p, span.
 *
 * @example <Typography component={Type.H1} classes="text-red-500">Hello World</Typography>
 * @param children - The content of the typography
 * @param component - The type of the typography
 * @param isSr - If the typography is for screen readers
 * @param classes - The classes to be added to the typography
 *
 * @returns The typography component
 */
export default function Typography({
  children,
  component,
  isSr = false,
  classes = '',
}: Readonly<{
  children: React.ReactNode;
  component: Type;
  isSr?: boolean;
  classes?: string;
}>) {
  const classNames = classParser(
    DEFAULT_TEXT_SIZE,
    `${isSr ? 'sr-only' : ''} ${classes}`
  );

  return React.createElement(component, { className: classNames }, children);
}

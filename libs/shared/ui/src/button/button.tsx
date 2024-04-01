import { PropsWithChildren } from 'react';

/* eslint-disable-next-line */
export interface ButtonProps extends PropsWithChildren {}

export function Button({ children }: ButtonProps) {
  return <button>{children}</button>;
}

export default Button;

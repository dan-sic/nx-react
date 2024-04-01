import { Outlet } from 'react-router-dom';
import styles from './layout.module.css';

/* eslint-disable-next-line */
export interface LayoutProps {
  navbarSlot: JSX.Element;
}

export function Layout({ navbarSlot }: LayoutProps) {
  return (
    <div className={styles['container']}>
      {navbarSlot}
      <Outlet />
    </div>
  );
}

export default Layout;

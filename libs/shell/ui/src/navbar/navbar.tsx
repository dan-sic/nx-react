import styles from './navbar.module.css';

/* eslint-disable-next-line */
export interface NavbarProps {
  navItems: {
    name: string;
    path: string;
  }[];
}

export function Navbar({ navItems }: NavbarProps) {
  return (
    <nav className={styles['container']}>
      {navItems.map((item) => (
        <a href={item.path}>{item.name}</a>
      ))}
    </nav>
  );
}

export default Navbar;

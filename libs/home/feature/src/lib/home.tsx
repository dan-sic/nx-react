import { Button } from '@nx-react/shared/ui';
import styles from './home.module.css';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Home!</h1>
      <Button>Click me</Button>
    </div>
  );
}

export default Home;

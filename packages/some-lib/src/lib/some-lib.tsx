import { client } from '@ccreusat/client';
import styles from './some-lib.module.css';

export function SomeLib() {
  console.log({ client });
  return (
    <div className={styles['container']}>
      <h1>Welcome to SomeLib!</h1>
    </div>
  );
}

export default SomeLib;

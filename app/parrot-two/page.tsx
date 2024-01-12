import Image from 'next/image';
import parrotTwo from '@/lib/assets/parrot-2.gif';
import styles from './ParrotTwo.module.css';

export default function Parrot() {
  return (
    <div className={styles.wrapper}>
      <Image src={parrotTwo} alt={'it is a parrot'} className={styles.parrot} />
    </div>
  );
}

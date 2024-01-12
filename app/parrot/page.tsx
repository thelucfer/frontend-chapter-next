import Image from 'next/image';
import parrot from '@/lib/assets/parrot-1.gif';
import styles from './Parrot.module.css';

export default function Parrot() {
  return (
    <div className={styles.wrapper}>
      <Image src={parrot} alt={'it is a parrot'} />
    </div>
  );
}

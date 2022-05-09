import { FC } from 'react';
import Link from 'next/link';

import styles from '../../styles/components/admin/aside.module.scss';

interface Props {
  auth: object;
}

const Aside: FC<Props> = ({ auth }) => {
  return (
    <div className={styles.admin__sidebar}>
    </div>
  )
}

export default Aside;
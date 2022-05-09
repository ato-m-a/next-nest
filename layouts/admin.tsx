import { ReactNode, ReactElement } from 'react';

type AdminPageProps = {
  children: ReactNode;
}

import styles from '../styles/layout/admin.module.scss';

const AdminLayout = ({ children }: AdminPageProps): ReactElement => {
  return (
    <div className={styles.admin}>
      <div className={styles.admin__content}>
        { children }
      </div>
    </div>
  )
}

export default AdminLayout;
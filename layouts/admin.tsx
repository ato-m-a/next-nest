import { ReactNode, ReactElement } from 'react';

/* Component */
import AdminAside from '../components/admin/aside'; 
import AdminHeader from '../components/admin/header';

type AdminPageProps = {
  children: ReactNode;
}

import styles from '../styles/layouts/admin.module.scss';

const AdminLayout = ({ children }: AdminPageProps): ReactElement => {
  return (
    <div className={styles.admin}>
      { /* Aside Component */ }
      <AdminAside />
      <div className={styles.admin__content}>
        { /* Header Component */ }
        <AdminHeader />
        {children}
      </div>
    </div>
  )
}

export default AdminLayout;
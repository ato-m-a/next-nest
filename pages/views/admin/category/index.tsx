import { ICategory } from '../../../../interfaces/IData';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { CategoryData } from '../../../../modules/api';
import { Page } from '../../../../types/page';

/* components */
import Category from '../../../../components/admin/category';

/* Layout */
import AdminLayout from '../../../../layouts/admin';

/* style */
import styles from '../../../../styles/pages/admin/vertical.module.scss';

const AdminCategory: Page = () => {
  const { data, error } = useQuery<ICategory, Error>('category', CategoryData);
  
  return (
    <div className={styles.admin__container}>
      {/* Menu Section */}
      <Category items={data?.menu} />
    </div>
  )
}

AdminCategory.layout = AdminLayout;

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('category', () => CategoryData());

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default AdminCategory;
import Link from 'next/link';
import type { ReactElement } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { getCategory } from '../../../../lib/api/category';
import { Page } from '../../../../types/page';
import { IMenu, IPage } from '../../../../interfaces/ICategory';

interface Category {
  menu: IMenu[];
  page: IPage[];
}

interface MenuProps {
  props: {
    NO: number;
    PATH: string;
    NAME: string;
  },
  key?: number
}

/* Layout */
import AdminLayout from '../../../../layouts/admin';

/* style */
import styles from '../../../../styles/pages/admin/vertical.module.scss';


const AdminCategory: Page = () => {
  const { data, error } = useQuery<Category, Error>('category', getCategory);

  /* Menu Table Component */
  const MenuTbody = ({ props }: MenuProps): ReactElement => {
    return (
      <tr>
        <td>{props.NO}</td>
        <td>/{props.PATH}</td>
        <td>{props.NAME}</td>
        <td>
          <span className={styles.admin__arrow_able}>▲</span>
        </td>
        <td>
          <span className={styles.admin__arrow_able}>▼</span>
        </td>
        <td>
          <Link href={{ pathname: '/views/admin/categories/pages/modify' }} as={'/admin/categories/pages/modify'} >
            <span className={styles.span_btn}>
              수정
            </span>
          </Link>
        </td>
        <td>
          <span className={styles.span_btn}>삭제</span>
        </td>
      </tr>
    )
  }
  
  return (
    <div className={styles.admin__container}>
      <div className={styles.admin__subtitle}>
        메뉴 구성
      </div>
      <div className={styles.admin__title}>
        총 등록된 메뉴 <span className={styles.admin__amount}>{data?.menu.length}</span>개
      </div>
      <div className={styles.admin__card}> 
        <div className={styles.admin__bar}>
          <button type="button">
            <Link
              href={{ pathname: '/views/admin/categories/menu/create' }}
              as={'/admin/categories/menu/create'}
            >
              등록하기 +
            </Link>
          </button>
        </div>
        <table className={styles.admin__table}>
          <thead>
            <tr>
              <th>NO</th>
              <th>경로</th>
              <th>제목</th>
              <th colSpan={2}>순서조정</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          {
            data?.menu.length === 0
              ?
                <tbody>
                  <tr>
                    <td colSpan={7}>생성된 메뉴 항목이 없습니다.</td>
                  </tr>
                </tbody>
              :
                <tbody>
                  {data?.menu.map((item) => (
                    <MenuTbody key={item.NO} props={item} />
                  ))} 
                </tbody>
          }
        </table>
      </div>
    </div>
  )
}

AdminCategory.layout = AdminLayout;

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('category', () => getCategory());

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default AdminCategory;
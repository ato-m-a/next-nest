import { FC,  ReactElement, Fragment } from 'react';
import Link from 'next/link';
import { IMenu } from '../../interfaces/ICategory';

/* Component Props */
interface Props {
  items: IMenu[];
}

/* tbody Props */
interface ContentProps {
  item: IMenu;
  menu: string;
  key: string;
}

import styles from '../../styles/pages/admin/vertical.module.scss';

const Category: FC<Props> = ({ items }) => {
  const pageLength = items?.map(item => item.PAGE.length).reduce((accumulator, current) => accumulator + current);

  const Contents = ({ item, menu }: ContentProps): ReactElement => {
    return (
      <Fragment>
        {item.PAGE.map((page) => (
          <tr key={page.NAME}>
            {/* Menu */}
            {
              page === item.PAGE[0] && 
              <td rowSpan={item.PAGE.length}>
                <span>{menu}</span>
                <div className={styles.menu}>
                  <span className={styles.span_btn} style={{ marginRight: 3 }}>수정</span>
                  <span className={styles.span_btn}>삭제</span>
                </div>
              </td> 
            }
            {/* Page */}
            <td>{page.NAME}</td>
            <td>{page.PATH}</td>
            <td>{page.TYPE}</td>
            <td>{page.ACTIVATE ? 'O' : 'X'}</td>
            <td>
              <Link href={{ pathname: '/admin/category/modify' }}>
                <span className={styles.span_btn}>수정</span>
              </Link>
            </td>
            <td>
              <span className={styles.span_btn}>삭제</span>
            </td>
          </tr>
        ))}
      </Fragment>
    )
  }
  
  return (
    <Fragment>
      <div className={styles.admin__title}>
        총 등록된 메뉴 <span className={styles.admin__amount}>{items?.length}</span>개, 
        페이지 <span className={styles.admin__amount}>{pageLength}</span>개
      </div>
      <div className={styles.admin__card}>
        <div className={styles.admin__bar}>
          <button type="button">
            <Link href={{ pathname: '/admin/category/create' }}>
              등록하기 +
            </Link>
          </button> 
        </div>
        <table className={styles.admin__table}>
          <thead>
            <tr>
              <th>메뉴</th>
              <th>페이지</th>
              <th>경로</th>
              <th>타입</th>
              <th>노출</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {
              items?.length === 0
              ?
              <tr>
                <td colSpan={7}>작성된 항목이 없습니다.</td>
              </tr>
              :
              <Fragment>
                {items?.map((item) => (<Contents menu={item.NAME} key={item.NAME} item={item} />))}
              </Fragment>
            }
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default Category;
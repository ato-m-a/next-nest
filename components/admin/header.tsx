import { FC } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';

/* style module */
import styles from '../../styles/components/admin/header.module.scss';

const Header: FC = () => {
  const router = useRouter();

  /* 상단 메뉴 */
  const navRoutes = [
    { name: '홈', path: '/admin/home' },
    { name: '카테고리', path: '/admin/category' },
    { name: '팝업', path: '/admin/popup' },
    { name: '고객관리', path: '/admin/client' },
    { name: '설정', path: '/admin/setting' }
  ]

  const { mutate } = useMutation(async () => {
    return await axios.delete('/api/auth/signout');
  }, {
    onSuccess: (data, variables, context) => {
      router.replace('/admin/signin');
    }
  });

  return (
    <div className={styles.admin__header_container}>
      <div className={styles.admin__header_bar}>
        <ul>
          <li>
            <Link href={{ pathname: '/' }}>
              <span>홈페이지</span>
            </Link>
          </li>
          <li>
            <span onClick={() => { mutate() }}>로그아웃</span>
          </li>
        </ul>
      </div>
      <div className={styles.admin__header_nav}>
        <ul>
          {navRoutes.map((route) => (
            <li key={route.name}>
              <Link href={{ pathname: route.path }}>
                <div className={styles.admin__header_btn} style={{ background: route.path === router.asPath ? '#2e9dd8' : '#494b50' }}>
                  {route.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.admin__header_info}>
        <ol className={styles.admin__path}>
          <li>
            <Link href={{ pathname: '/admin' }}>
              홈
            </Link>
          </li>
          <li className={styles.admin__header_separator}>/</li>
          <li>
            <Link href={{ pathname: '/admin' }}>
              뭐시기
            </Link>
          </li>
          <li className={styles.admin__header_separator}>/</li>
          <li>
            <Link href={{ pathname: '/admin' }}>
              저시기
            </Link>
          </li>
        </ol>
        <h3>
          저시기 
        </h3>
      </div>
    </div>
  )
}

export default Header;
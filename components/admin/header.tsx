import { FC } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useMutation } from 'react-query';
import Router from 'next/router';

/* style module */
import styles from '../../styles/components/admin/header.module.scss';

const Header: FC = () => {
  const { mutate } = useMutation(async () => {
    return await axios.delete('/api/auth/signout');
  }, {
    onSuccess: (data, variables, context) => {
      Router.replace('/admin/signin');
    }
  });

  return (
    <div className={styles.admin__header_container}>
      <div className={styles.admin__header_bar}>
        <ul>
          <li>
            <Link
              href={{ pathname: '/views/Index' }}
              as={'/'}
            >
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
          <li>
            <div className={styles.admin__header_btn}>1번</div>
          </li>
          <li>
            <div className={styles.admin__header_btn}>2번</div>
          </li>
          <li>
            <div className={styles.admin__header_btn}>3번</div>
          </li>
          <li>
            <div className={styles.admin__header_btn}>4번</div>
          </li>
        </ul>
      </div>
      <div className={styles.admin__header_info}>
        <ol className={styles.admin__path}>
          <li>
            <Link
              href={{ pathname: '/views/admin' }}
              as='/admin'
            >
              홈
            </Link>
          </li>
          <li>
            <div className={styles.admin__path_btn}>
              뭐시기
            </div>
          </li>
          <li>
            <div className={styles.admin__path_btn}>
              저시기
            </div>
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
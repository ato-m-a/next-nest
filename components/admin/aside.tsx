import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import { IAuth } from '../../interfaces/IAuth';

/* style module */
import styles from '../../styles/components/admin/aside.module.scss';

const Aside: FC = () => {
  const router = useRouter();

  const { data, status, error, isLoading }: UseQueryResult<IAuth, Error> = useQuery('auth', async () => {
    const { data } = await axios.get('/api/auth');
    return data;
  }, {
    onError: (error) => {
      alert('세션이 만료되어 로그인 페이지로 이동합니다.');
      router.replace('/admin/signin');
    }
  });
  
  return (
    <aside className={styles.admin__sidebar}>
      <Link
        href={{ pathname: '/views/admin' }}
        as={'/admin'}
      >
        <h1 className={styles.admin__logo}>
          이미지 들어갈 자리
        </h1>
      </Link>

      <div className={styles.admin__info}>
        <span className={styles.admin__img} />
        <ul>
          <li>
            <span>관리자</span>
            <strong>{data?.NAME || '관리자'}</strong>
          </li>
          <li>
            <span>아이디</span>
            <strong>{data?.ID}</strong>
          </li>
          <li>
            <span>레벨</span>
            <strong>
              {
                data?.ROLE
                ? data?.ROLE === 'SUPER' ? '마스터' : '사이트관리자'
                : '게스트'
              }
            </strong>
          </li>
        </ul>
      </div>

      <h2 className={styles.admin__title}>
        타이틀
      </h2>
      <div className={styles.admin__menus}>
        <ul>
          <Link
            href={{ pathname: '/views/admin/signin' }}
            as={'/admin/signin'}
          >
            <li>
              로그인
            </li>
          </Link>
        </ul>
      </div>
    </aside>
  )
}

export default Aside;
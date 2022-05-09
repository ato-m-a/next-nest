import { useState } from 'react';
import { useRouter } from 'next/router';
import { Page } from '../../../types/page';

import axios from 'axios';

/* style */
import styles from '../../../styles/pages/admin/signin.module.scss';

const SignIn: Page = () => {
  /* router */
  const router = useRouter();

  /* state */
  const [text, setText] = useState({
    id: '',
    pw: ''
  });

  const { id, pw } = text;

  /* methods */
  // state change
  const onChange = (e: any): void => {
    setText({
      ...text,
      [e.target.name]: e.target.value
    })
  }
  // 로그인
  const signin = async (): Promise<void | boolean> => {
    if (id === '') {
      alert('아이디를 입력해주세요.');
      document.getElementById('id').focus();
      return false;
    }

    if (pw === '') {
      alert('비밀번호를 입력해주세요.');
      document.getElementById('pw').focus();
      return false;
    }

    try {
      const response = await axios.post('/api/auth/signin', { id, pw });
      if (response.status === 201) {
        alert('로그인에 성공했습니다.');
        router.replace('/admin');
      }
    } catch ({ response }) {
      switch (response.status) {
        case 401:
          alert('비밀번호가 올바르지 않습니다.');
          break;
        case 403:
          alert('허용된 IP가 아닙니다.');
          break;
        case 404:
          alert('해당하는 ID가 없습니다.');
          break;
        default:
          alert('잘못된 요청입니다.');
      }
    }
  }

  /* templates */
  return (
    <div className={styles.signin}>
      <div className={styles.signin__body}>
        <div className={styles.signin__form}>
          <form className={styles.signin__inner}>
            <h1>
              관리자 로그인
            </h1>
            <label htmlFor="id">아이디</label>
            <input type="text" name="id" id="id" value={id} onChange={onChange} />

            <label htmlFor="pw">비밀번호</label>
            <input type="password"name="pw" id="pw" value={pw} onChange={onChange} onKeyDown={(e) => e.key === 'Enter' && signin()} />
            
            <button type="button" onClick={signin}>로그인</button>
          </form>
        </div>
      </div>
      <div className={styles.signin__footer}>
        Copyright (C) {new Date().getFullYear()} (주)하이브미디어. All rights reserved.
      </div>
    </div>
  );
};

// export async function getServerSideProps(ctx: NextPageContext) {
//   return {};
// }

export default SignIn;

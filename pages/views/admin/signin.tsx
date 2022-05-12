import { useState } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Page } from '../../../types/page';

/* style */
import styles from '../../../styles/pages/admin/signin.module.scss';

const SignIn: Page = () => {
  const router = useRouter();

  const [text, setText] = useState({
    id: '',
    pw: ''
  });

  const { id, pw } = text;

  const { mutate } = useMutation(async () => {
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

    return await axios.post('/api/auth/signin', { id, pw });
  }, {
    onSuccess: (data, variables, context) => {
      if (data) router.replace('/admin');
    },
    onError: (error: any, variables, context) => {
      switch (error.response.status) {
        case 401:
          alert('비밀번호가 맞지 않습니다.');
          setText({ ...text, pw: '' });
          break;
        case 403:
          alert('허용된 IP가 아닙니다. 관리자에게 문의해주세요.');
          break;
        case 404:
          alert('해당하는 ID가 없습니다.');
          setText({ ...text, id: '' });
          break;
        default:
          alert('잘못된 요청입니다.');
      }
    }
  });

  const onChange = (e: any): void => {
    setText({
      ...text,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={styles.signin}>
      <div className={styles.signin__body}>
        <div className={styles.signin__form}>
          <form className={styles.signin__inner}>
            <h1>
              관리자 로그인
            </h1>
            <label htmlFor="id">아이디</label>
            <input type="text" name="id" id="id" value={id} onChange={onChange} onKeyDown={(e) => e.key === 'Enter' && mutate()} />

            <label htmlFor="pw">비밀번호</label>
            <input type="password"name="pw" id="pw" value={pw} onChange={onChange} onKeyDown={(e) => e.key === 'Enter' && mutate()} />
            
            <button type="button" onClick={() => { mutate() }}>로그인</button>
          </form>
        </div>
      </div>
      <div className={styles.signin__footer}>
        Copyright (C) {new Date().getFullYear()} (주)하이브미디어. All rights reserved.
      </div>
    </div>
  );
};

export default SignIn;

import { useState } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
import Router from 'next/router';
import { Page } from '../../../types/page';

/* style */
import styles from '../../../styles/pages/admin/signin.module.scss';

const SignUp: Page = () => {
  const [text, setText] = useState({
    id: '',
    pw: '',
    name: '',
    role: ''
  });

  const { id, pw, name, role } = text;

  const { mutate } = useMutation(async () => {
    return await axios.post('/api/auth/signup', { id, pw, name, role });
  }, {
    onSuccess: (data, variables, context) => {
      alert(`계정을 성공적으로 생성했습니다: ${id}`);
      Router.replace('/admin');
    },
    onError: (error: any, variables, context) => {
      alert(error.response.data);
    }
  });

  const action = () => {
    if (id === '') {
      alert('아이디를 입력해주세요.');
      return;
    }

    if (pw === '') {
      alert('비밀번호를 입력해주세요.');
      return;
    }

    if (role === '') {
      alert('권한을 설정해주세요.');
      return;
    }

    mutate();
  }

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
              관리자 계정 생성
            </h1>
            <label htmlFor="id">아이디</label>
            <input type="text" name="id" id="id" value={id} onChange={onChange} />

            <label htmlFor="pw">비밀번호</label>
            <input type="password" name="pw" id="pw" value={pw} onChange={onChange} />

            <label htmlFor="name">이름</label>
            <input type="text" name="name" id="name" value={name} onChange={onChange} />

            <label htmlFor="role">권한</label>
            <select name="role" id="role" className="admin__select" onChange={onChange}>
              <option value="">권한을 선택하세요.</option>
              <option value="SUPER">최고관리자</option>
              <option value="SITE">사이트관리자</option>
            </select>
            
            <button type="button" onClick={() => { action() }}>계정생성</button>
          </form>
        </div>
      </div>
      <div className={styles.signin__footer}>
        Copyright (C) {new Date().getFullYear()} (주)하이브미디어. All rights reserved.
      </div>
      { /* styled jsx */ }
      <style jsx>{`
        .admin__select {
          display: inline-block;
          border: 1px solid #CDCBCB;
          color: #333;
          padding-left: 15px;
          height: 48px;
        }

        .admin__select:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
}

export default SignUp;
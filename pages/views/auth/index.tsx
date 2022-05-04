import { useState } from 'react';
import { NextPage, NextPageContext } from 'next';
import axios from 'axios';

interface Props {
  result: string | string[] | undefined;
}

const Auth: NextPage<Props> = ({ result }) => {
  const [text, setText] = useState({
    id: '',
    pw: ''
  });

  const { id, pw } = text;

  const onChange = (e: any) => {
    setText({
      ...text,
      [e.target.name]: e.target.value
    })
  }

  const log = async () => {
    const response = await axios.post('/auth/signin', { id, pw });
    console.log(response);
  }

  return (
    <div className="body">
      <div>{result}</div>
      <div>
        <input type="text" name="id" value={id} onChange={onChange} />
        <input type="password" name="pw" value={pw} onChange={onChange} />
        <button type="button" onClick={log}>제출</button>
      </div>
    </div>
  );
};

export async function getServerSideProps(ctx: NextPageContext) {
  const props: Props = {
    result: ctx.query.result
  };

  return { props };
}
export default Auth;

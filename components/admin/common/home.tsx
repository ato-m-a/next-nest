import { FC, Fragment, useEffect, useState, useRef } from 'react';
import { Props } from '../../../interfaces/IEmit';

/* styles */
import styles from '../../../styles/pages/admin/admin.module.scss';


const CommonHome: FC<Props> = ({ propsData, emit }) => {
  const [text, setText] = useState({
    title: propsData.title,
    favicon: propsData.favicon
  });

  const { title, favicon } = text;

  const onChange = (e: any): void => {
    setText({
      ...text,
      [e.target.name]: e.target.value
    });
  }

  // 값 변경 시 Emit
  useEffect(() => { emit({ key: 'home', value: text }); }, [title, favicon]);

  return (
    <Fragment>
      <div className={styles.admin__subtitle}>
        홈페이지 공통 설정
      </div>
      <div className={styles.admin__title}>
        파비콘 및 타이틀을 설정합니다.
      </div>
      <div className={styles.admin__card}>
        <table className={styles.admin__table}>
          <thead>
            <tr>
              <th>구분</th>
              <th>미리보기</th>
              <th>업로드</th>
            </tr>
          </thead>
          <tbody>
            {/* 파비콘 */}
            <tr>
              <td>파비콘</td>
              <td>
                <div className={styles.admin__preview}>

                </div>
              </td>
              <td className={styles.upload}>
                <input type="file" id="upload-favicon" style={{ display: 'none' }}
                accept=".png, .jpg, .jpeg" name="favicon" />
                <button type="button" className={styles.upload__btn}>
                  <label htmlFor="upload-favicon">
                    업로드 +
                  </label>
                </button>
              </td>
            </tr>
            {/* 타이틀 */}
            <tr>
              <td>타이틀</td>
              <td colSpan={2}>
                <input type="text" value={title} name="title" onChange={onChange} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default CommonHome;
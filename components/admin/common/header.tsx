import { FC, Fragment, useEffect, useState, useRef } from 'react';
import { Props } from '../../../interfaces/IEmit';

/* styles */
import styles from '../../../styles/pages/admin/admin.module.scss';


const CommonHeader: FC<Props> = ({ propsData, emit }) => {
  const [text, setText] = useState({
    tel: propsData.tel,
    logo: propsData.logo,
    shortcut: propsData.shortcut
  });

  const { tel, logo, shortcut } = text;

  const onChange = (e: any): void => {
    setText({
      ...text,
      [e.target.name]: e.target.value
    });
  }

  // 값 변경 시 emit
  useEffect(() => { emit({ key: 'header', value: text }) }, [tel, logo, shortcut]);

  return (
    <Fragment>
      <div className={styles.admin__subtitle}>
        홈페이지 헤더 설정
      </div>
      <div className={styles.admin__title}>
        홈페이지의 헤더 부분을 설정합니다.
      </div>
      <div className={styles.admin__card}>
        <table className={styles.admin__table}>
          <thead>
            <tr>
              <th>구분</th>
              <th>미리보기</th>
              <th>노출</th>
              <th>경로</th>
              <th>업로드</th>
            </tr>
          </thead>
          <tbody>
            {/* 바로가기 */}
            <tr>
              <td>바로가기</td>
              <td>
                <div className={styles.admin__preview}>

                </div>
              </td>
              <td>

              </td>
              <td>
                <input type="text" value={shortcut.path} onChange={onChange} />
              </td>
              <td className={styles.upload}>
                <input type="file" id="upload-shortcut" style={{ display: 'none' }}
                accept=".png, .jpg, .jpeg" name="shortcut" />
                <button type="button" className={styles.upload__btn}>
                  <label htmlFor="upload-shortcut">
                    업로드 +
                  </label>
                </button>
              </td>
            </tr>
            {/* 전화번호 */}
            <tr>
              <td>전화번호</td>
              <td>
                <div className={styles.admin__preview}>

                </div>
              </td>
              <td>
                
              </td>
              <td>
                <input type="text" value={tel.tel} onChange={onChange} />
              </td>
              <td className={styles.upload}>
                <input type="file" id="upload-tel" style={{ display: 'none' }}
                accept=".png, .jpg, .jpeg" name="tel" />
                <button type="button" className={styles.upload__btn}>
                  <label htmlFor="upload-tel">
                    업로드 +
                  </label>
                </button>
              </td>
            </tr>
            {/* 로고 */}
            <tr>
              <td>로고</td>
              <td>
                <div className={styles.admin__preview}>

                </div>
              </td>
              <td colSpan={2}>

              </td>
              <td className={styles.upload}>
                <input type="file" id="upload-logo" style={{ display: 'none' }}
                accept=".png, .jpg, .jpeg" name="logo" />
                <button type="button" className={styles.upload__btn}>
                  <label htmlFor="upload-logo">
                    업로드 +
                  </label>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default CommonHeader;
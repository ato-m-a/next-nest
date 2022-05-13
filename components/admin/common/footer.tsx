import { FC, Fragment, useEffect, useState, useRef } from 'react';
import { Props } from '../../../interfaces/IEmit';

/* styles */
import styles from '../../../styles/pages/admin/admin.module.scss';


const CommonFooter: FC<Props> = ({ propsData, emit }) => {
  const [data, setData] = useState({
    src: propsData.src,
    background: propsData.background,
    color: propsData.color,
    border: propsData.border,
    text: propsData.text
  });

  const { src, background, color, border, text } = data;

  const onChange = (e: any): void => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  useEffect(() => { emit({ key: 'footer', value: data }) }, [src, background, color, border, text]);

  return (
    <Fragment>
      <div className={styles.admin__subtitle}>
        홈페이지 푸터 설정
      </div>
      <div className={styles.admin__title}>
        홈페이지의 푸터를 설정하는 곳입니다.
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
            {/* 최상단 이미지 */}
            <tr>
              <td>최상단 이미지</td>
              <td rowSpan={2}>
                <div className={styles.admin__preview}>

                </div>
              </td>
              <td className={styles.upload}>
                <input type="file" id="upload-footer" style={{ display: 'none' }}
                accept=".png, .jpg, .jpeg" name="footer" />
                <button type="button" className={styles.upload__btn}>
                  <label htmlFor="upload-footer">
                    업로드 +
                  </label>
                </button>
              </td>
            </tr>
            {/* 텍스트 색상 */}
            <tr>
              <td>텍스트 색상</td>
              <td>
                폰트 색상(헥스값) : <input type="text" value={color} name="color" onChange={onChange} />
              </td>
            </tr>
            {/* 테두리 */}
            <tr>
              <td>테두리</td>
              <td colSpan={2}>
                <input type="text" value={border.px} name="border.px" onChange={onChange} />,
                색상(헥스값)
                <input type="text" value={border.color} name="border.color" onChange={onChange} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default CommonFooter;
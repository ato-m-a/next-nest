import { ICommon } from '../../../../interfaces/IData';
import { useState } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { Page } from '../../../../types/page';
import { CommonData } from '../../../../modules/api';
import { EmitData } from '../../../../interfaces/IEmit';

/* components */
import CommonHome from '../../../../components/admin/common/home';
import CommonHeader from '../../../../components/admin/common/header';
import CommonFooter from '../../../../components/admin/common/footer';

/* Layout */
import AdminLayout from '../../../../layouts/admin';

/* style */
import styles from '../../../../styles/pages/admin/vertical.module.scss';


const AdminCommon: Page = () => {
  const { data, error } = useQuery<ICommon, Error>('common', CommonData);

  const [props, setProps] = useState({
    homeProps: {},
    headerProps: {},
    footerProps: {},
    indexProps: {}
  });

  const { homeProps, headerProps, footerProps, indexProps } = props;
  
  // 자식으로부터 Props 올려받을 함수
  const emitProps = (dataset: EmitData) => {
    setProps({
      ...props,
      [dataset.key]: dataset.value
    });
  }

  /* 각 컴포넌트에 전달해 줄 데이터 */
  const home = {
    favicon: data?.latest.FAVICON,
    title: data?.latest.TITLE,
  }

  const header = {
    tel: {
      tel: data?.latest.TEL,
      src: data?.latest.TEL_SRC,
      activate: data?.latest.TEL_ACTIVATE
    },
    logo: {
      src: data?.latest.HOME_LOGO_SRC,
      activate: data?.latest.HOME_LOGO_ACTIVATE
    },
    shortcut: {
      src: data?.latest.SHORTCUT_SRC,
      path: data?.latest.SHORTCUT_PATH,
      activate: data?.latest.SHORTCUT_ACTIVATE
    }
  }

  const footer = {
    src: data?.latest.FOOTER_SRC,
    background: data?.latest.FOOTER_BACKGROUND,
    color: data?.latest.FOOTER_FONT,
    border: {
      px: data?.latest.FOOTER_BORDER_PX,
      color: data?.latest.FOOTER_BORDER,
      direction: data && ['top', 'right', 'bottom', 'left'].filter(direction => data.latest[`FOOTER_BORDER_${direction.toUpperCase()}`])
    },
    text: {
      PC: data?.latest.FOOTER_TEXT_PC,
      Mobile: data?.latest.FOOTER_TEXT_MOBILE
    }
  }

  const index = {
    type: data?.latest.INDEX_TYPE,
    src: data?.latest.INDEX_SRC
  }

  return (
    <div className={styles.admin__container}>
      {/* section */}
      { data && <CommonHome propsData={home} emit={emitProps} /> }
      { data && <CommonHeader propsData={header} emit={emitProps} /> }
      { data && <CommonFooter propsData={footer} emit={emitProps} /> }
    </div>
  )
}

AdminCommon.layout = AdminLayout;

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('common', () => CommonData());

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default AdminCommon;
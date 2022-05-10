import { ReactNode, ReactElement } from 'react';

type ClientPageProps = {
  children: ReactNode;
}

const ClientLayout = ({ children }: ClientPageProps): ReactElement => {
  return (
    <>
      {children}
    </>
  )
}

export default ClientLayout;
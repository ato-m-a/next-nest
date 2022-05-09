import { NextPageContext } from 'next';
import { Page } from '../../../types/page';

/* Layout */
import AdminLayout from '../../../layouts/admin';

interface Props {
  result: string | string[] | undefined;
}

const Admin: Page<Props> = ({ result }) => {
  return (
    <div className="body">
      <div>{result}</div>
    </div>
  );
};

Admin.layout = AdminLayout;

export async function getServerSideProps(ctx: NextPageContext) {
  const props: Props = {
    result: ctx.query.result
  };

  return { props };
}
export default Admin;

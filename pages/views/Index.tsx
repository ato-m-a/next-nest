import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import type { Page } from '../../types/page';

/* Layout */
import ClientLayout from '../../layouts/client';

interface Props {
  query: { name?: string };
}

const Index: Page<Props> = ({ query }) => {
  const greetName = query.name ? query.name : 'World';

  return (
    <div className="body">
      <div>Hello, {greetName}!</div>
    </div>
  );
};

Index.layout = ClientLayout;

export async function getServerSideProps(ctx: NextPageContext) {
  const query = {
    name: ctx.query.name || null,
  };
  return { props: { query } };
}

export default Index;

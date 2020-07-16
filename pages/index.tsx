import React from 'react';
import {
  GetStaticProps, NextPage, GetStaticPropsContext, GetStaticPropsResult,
} from 'next';

import add from '../src/utils/add';

interface IndexProps {
  greeting: string
}

const IndexPage:NextPage<IndexProps> = (props: IndexProps) => {
  const { greeting } = props;

  return (
    <div>
      <h1>
        {greeting}
        👋
        {' '}
        {add(1, 2)}
      </h1>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext):
  Promise<GetStaticPropsResult<IndexProps>> => ({
  props: {
    greeting: 'Hello Next.js',
  },
});

export default IndexPage;

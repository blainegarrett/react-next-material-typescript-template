import React from 'react';
import {
  GetStaticProps, NextPage, GetStaticPropsContext, GetStaticPropsResult,
} from 'next';

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

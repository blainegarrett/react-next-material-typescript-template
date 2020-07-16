import React from 'react';
import {
  GetStaticProps, NextPage, GetStaticPropsContext, GetStaticPropsResult,
} from 'next';
import IndexContent from '~/screens/IndexContent';

interface IndexProps { greeting: string }

const IndexPage:NextPage<IndexProps> = (props: IndexProps) => {
  const { greeting } = props;

  return (
    <IndexContent greeting={greeting} />
  );
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext):
  Promise<GetStaticPropsResult<IndexProps>> => ({
  props: {
    greeting: 'Hello Next.js',
  },
});

export default IndexPage;

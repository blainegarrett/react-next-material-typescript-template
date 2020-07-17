import React from 'react';
import {
  NextPage,
  GetServerSidePropsContext, GetServerSidePropsResult,
} from 'next';
import IndexContent from '~/screens/IndexContent';

interface IndexProps { greeting: string }

const IndexPage:NextPage<IndexProps> = (props: IndexProps) => {
  const { greeting } = props;
  return (
    <IndexContent greeting={greeting} />
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext):
Promise<GetServerSidePropsResult<IndexProps>> {
  return {
    props: { greeting: 'Hello From The Server' }, // will be passed to the page component as props
  };
}

export default IndexPage;

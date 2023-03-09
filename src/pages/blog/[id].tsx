import React from 'react';
import { getAllPostIds, getPostData } from '@/lib/posts';

export default function Blog({ postData }: any) {
  return (
    <div>
      <h1>{postData.title}</h1>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

import { getPosts } from '@/lib/getPosts';
import fs from 'fs';
import path from 'path';

export default function Blog({ fileNames }: any) {
  // console.log(postsDirectory);

  // console.log(fileNames);
  return (
    <>
      <main>
        <h1>All Blogs</h1>
        <ul>
          {fileNames.map((post: any, i: number) => (
            <li key={i}>{post}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const fileNames = getPosts();
  return {
    props: {
      fileNames,
    },
  };
}

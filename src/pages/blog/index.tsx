import { getAllPostIds } from '@/lib/posts';
import Link from 'next/link';

export default function Blog({ fileNames }: any) {
  return (
    <>
      <main>
        <h1>All Blogs</h1>
        <ul>
          {fileNames.map((fileName: any, i: number) => (
            <li key={i}>
              <Link href={`/blog/${fileName.params.id}`}>
                {fileName.params.id}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const fileNames = getAllPostIds();
  return {
    props: {
      fileNames,
    },
  };
}

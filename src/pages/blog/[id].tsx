import { getAllPostIds, getPostData } from '@/lib/posts';
import { PostData } from '@/types';
import { parseISO, format } from 'date-fns';

export default function Blog({ postData }: { postData: PostData }) {
  const date = parseISO(postData.meta.date);
  return (
    <article>
      <h1>{postData.meta.title}</h1>
      <p>Published: {format(date, 'LLLL d, yyyy')}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
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
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

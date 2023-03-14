import { getAllPostIds, getPostData } from '@/lib/posts';
import { PostData } from '@/types';
import { parseISO, format } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote';
// import Image from 'next/image';

const Heading = (props: any) => {
  return <h2 style={{ color: 'tomato' }}>{props.children}</h2>;
};

// const components = {
//   h2: (props: any) => <Heading {...props} />,
//   img: (props: any) => (
//     <Image
//       style={{ objectFit: 'contain' }}
//       src={props.src}
//       alt={props.alt}
//       width={700}
//       height={700}
//       loading='lazy'
//     />
//   ),
// };

export default function Blog({ source }: { source: PostData }) {
  const date = parseISO(source.meta.date);
  // console.log(source.contentHtml);
  return (
    <article>
      <p>Published: {format(date, 'LLLL d, yyyy')}</p>
      {source && <MDXRemote {...source.contentHtml} />}
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
  const source = await getPostData(params.id);
  return {
    props: {
      source,
    },
  };
}

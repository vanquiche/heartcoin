import { getAllPostIds, getPostData } from '@/lib/posts';
import { PostData } from '@/types';
import { parseISO, format } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote';
// import Image from 'next/image';
import { CldImage } from 'next-cloudinary';

const Heading = (props: any) => {
  return <h2 style={{ color: 'tomato' }}>{props.children}</h2>;
};

const components = {
  h2: (props: any) => <Heading {...props} />,
  img: (props: any) => (
    <CldImage src={props.src} alt={props.alt} height={500} width={500} />
  ),
};

export default function Blog({ source }: { source: PostData }) {
  const date = parseISO(source.meta.date);
  // console.log(source.contentHtml);
  return (
    <article>
      <p>Published: {format(date, 'LLLL d, yyyy')}</p>
      {source && <MDXRemote {...source.contentHtml} components={components} />}
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

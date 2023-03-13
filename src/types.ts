import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface PostIds {
  params: {
    id: string;
  };
}

export interface Meta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
}

export interface PostData {
  id: string;
  meta: Meta;
  contentHtml: MDXRemoteSerializeResult;
}

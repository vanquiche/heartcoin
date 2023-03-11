export interface PostIds {
  params: {
    id: string;
  };
}

export interface Meta {
  slug: string;
  title: string;
  author: string;
  date: string;
  tags: string[];
}

export interface PostData {
  id: string;
  meta: Meta;
  contentHtml: string;
}

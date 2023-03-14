import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostData, PostIds } from '@/types';
import { serialize } from 'next-mdx-remote/serialize';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getAllPostIds(): PostIds[] {
  // read all files in post directory
  const fileNames: string[] = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id: string): Promise<PostData> {
  // get path of file
  const fullPath = path.join(postsDirectory, id);
  // read md file
  const fileContent = fs.readFileSync(fullPath, 'utf8');
  // parse front matter
  const matterResult = matter(fileContent);
  // proccess md to html
  const processContent = await serialize(matterResult.content);

  return {
    id,
    contentHtml: processContent,
    meta: JSON.parse(JSON.stringify(matterResult.data)),
  };
}

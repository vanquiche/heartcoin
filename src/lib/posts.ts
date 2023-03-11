import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { PostData, PostIds } from '@/types';

const postsDirectory = path.join(process.cwd(), 'content/blog-posts');

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
  const processContent = await remark().use(html).process(matterResult.content);

  const contentHtml = processContent.toString();

  return {
    id,
    contentHtml,
    meta: JSON.parse(JSON.stringify(matterResult.data)),
  };
}

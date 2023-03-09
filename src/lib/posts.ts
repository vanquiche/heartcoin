import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getPostData(id: any) {
  const fullPath = path.join(postsDirectory, id);
  const fileContent = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContent);

  return {
    id,
    ...matterResult.data,
  };
}

// export function getPostContent(path: string) {
//   const filePath = postsDirectory + '/' + path;
//   const fileContent = fs.readFileSync(filePath, 'utf8');
//   const matterResult = matter(fileContent);

//   return matterResult;
// }

// export async function renderMarkdown(content: any) {
//   const processContent = await remark().use(html).process(content);
//   const contentHtml = processContent.toString();
//   return contentHtml;
// }

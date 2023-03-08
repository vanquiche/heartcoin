import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  // const allFiles = fileNames.

  return fileNames;
}

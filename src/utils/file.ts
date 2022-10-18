import { readdirSync } from 'fs';
import { normalize } from 'path';

export const getFilesRecursive = (dirName: string): string[] => {
  let files = [] as any[];
  const items = readdirSync(normalize(dirName), { withFileTypes: true });

  for (const item of items) {
    if (item.isDirectory()) {
      files = [...files, ...getFilesRecursive(`${dirName}/${item.name}`)];
    } else {
      files.push(`${dirName}/${item.name}`);
    }
  }

  return files;
};

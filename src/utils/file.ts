import { readdirSync } from 'fs';
import { normalize } from 'path';

export const getFilesRecursive = (dir: string): string[] => {
  return readdirSync(normalize(dir), { withFileTypes: true }).reduce(
    (acc, item) => {
      item.isDirectory()
        ? acc.push(...getFilesRecursive(`${dir}/${item.name}`))
        : acc.push(`${dir}/${item.name}`);
      return acc;
    },
    [] as string[]
  );
};

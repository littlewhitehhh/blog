import path from 'path';

export function getRelPath(relativePath: string): string {
  const basePath = process.cwd();
  console.log('basePath', basePath);

  return path.resolve(basePath, relativePath);
}

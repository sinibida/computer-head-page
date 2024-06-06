// https://vitejs.dev/guide/assets#the-public-directory
export function getPublicURL(relativePath: string): string {
  return `/${relativePath}`;
}

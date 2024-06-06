// https://vitejs.dev/guide/assets#the-public-directory
export function getPublicURL(relativePath: string): string {
  if (import.meta.env.DEV) {
    return `/public/${relativePath}`;
  } else {
    return `/${relativePath}`;
  }
}

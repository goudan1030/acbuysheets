// 扩展 Next.js 的类型定义
declare module 'next' {
  export type PageProps<T = Record<string, string>> = {
    params: T;
    searchParams?: { [key: string]: string | string[] | undefined };
  };
} 
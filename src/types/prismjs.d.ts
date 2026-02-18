declare module "prismjs/components/prism-core" {
  export interface Language {
    [key: string]: unknown;
  }

  export const languages: {
    [key: string]: Language;
    js: Language;
    javascript: Language;
    clike: Language;
  };

  export function highlight(
    code: string,
    language: Language,
    name?: string,
  ): string;
}

declare module "prismjs/components/prism-clike";
declare module "prismjs/components/prism-javascript";

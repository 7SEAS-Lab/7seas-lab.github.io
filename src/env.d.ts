/// <reference types="astro/client" />

declare module '@citation-js/core' {
  export class Cite {
    constructor(input: unknown);
    data: any[];
    format(format: 'bibtex'): string;
  }
}

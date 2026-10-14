import { labPublications } from '../data/publications';

export const prerender = true;

export function GET() {
  return new Response(labPublications.map((publication) => publication.bibtex).join('\n\n'), {
    headers: { 'Content-Type': 'application/x-bibtex; charset=utf-8' },
  });
}

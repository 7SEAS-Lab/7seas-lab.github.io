import { readFileSync } from 'node:fs';
import { Cite } from '@citation-js/core';
import '@citation-js/plugin-bibtex';
import { team } from './team';
import { projects } from './projects';

export interface Publication {
  id: string;
  title: string;
  year: number;
  authors: string;
  venue: string;
  url: string;
  bibtex: string;
  members: string[];
  projects: string[];
}

const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

// Full member bibliography; the lab catalogue is curated separately below.
const bibliography = readFileSync('src/data/publications.bib', 'utf8');
const citation = new Cite(bibliography);
export const publications: Publication[] = citation.data.map((entry: any) => ({
  id: entry.id,
  title: entry.title,
  year: entry.issued?.['date-parts']?.[0]?.[0] ?? 0,
  authors: (entry.author ?? []).map((a: any) => a.literal ?? [a.given, a.family].filter(Boolean).join(' ')).join(', '),
  venue: entry['container-title'] ?? entry.publisher ?? '',
  url: entry.DOI ? `https://doi.org/${entry.DOI}` : entry.URL ?? '',
  bibtex: new Cite(entry).format('bibtex'),
  members: team.filter((member) => {
    const parts = member.name.split(' ');
    const family = normalize(parts.at(-1)!);
    const initial = normalize(parts[0])[0];
    return (entry.author ?? []).some((author: any) =>
      normalize(author.family ?? '') === family && normalize(author.given ?? '')[0] === initial
    );
  }).map((member) => member.slug),
  projects: projects.filter((project) => project.publicationIds.includes(entry.id)).map((project) => project.slug),
})).sort((a: Publication, b: Publication) => b.year - a.year || a.title.localeCompare(b.title));

// Explicit inclusion avoids treating a member's prior work as a lab publication.
const labPublicationIds = new Set([
  'ozdemir2026sampling',
  'phipps2026paint',
  'kieckhefen2026beast',
  '10.1007/978-3-031-39698-4_2' // perun
]);
export const labPublications = publications.filter((publication) => labPublicationIds.has(publication.id));

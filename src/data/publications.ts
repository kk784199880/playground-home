export interface Publication {
  title: string;
  journal: string;
  year: string;
  doi: string;
  url: string;
  type: string;
  displayIndex: number;
}

const ORCID_WORKS_URL = 'https://pub.orcid.org/v3.0/0009-0005-7035-5696/works';

interface OrcidWorkSummary {
  'put-code': number;
  title: { title: { value: string } };
  type: string;
  'publication-date': { year: { value: string }; month?: { value: string } | null; day?: { value: string } | null };
  'journal-title'?: { value: string } | null;
  url?: { value: string } | null;
  'external-ids'?: { 'external-id': Array<{ 'external-id-type': string; 'external-id-value': string; 'external-id-url'?: { value: string } | null; 'external-id-relationship': string }> };
  'display-index'?: string;
}

interface OrcidGroup {
  'external-ids': { 'external-id': Array<{ 'external-id-type': string; 'external-id-value': string; 'external-id-url'?: { value: string } | null }> };
  'work-summary': OrcidWorkSummary[];
}

interface OrcidResponse {
  group: OrcidGroup[];
}

function extractDoi(group: OrcidGroup): string {
  const ids = group['external-ids']?.['external-id'] || [];
  const doi = ids.find((id) => id['external-id-type'] === 'doi');
  return doi?.['external-id-value'] || '';
}

function mergeWorkSummaries(summaries: OrcidWorkSummary[]): OrcidWorkSummary {
  if (summaries.length === 1) return summaries[0];
  const base = { ...summaries[0] };
  for (let i = 1; i < summaries.length; i++) {
    const s = summaries[i];
    if (!base['journal-title']?.value && s['journal-title']?.value) {
      base['journal-title'] = s['journal-title'];
    }
    if (!base.url?.value && s.url?.value) {
      base.url = s.url;
    }
    if (!base['publication-date']?.month && s['publication-date']?.month) {
      base['publication-date'] = { ...base['publication-date'], month: s['publication-date'].month };
    }
    if (!base['publication-date']?.day && s['publication-date']?.day) {
      base['publication-date'] = { ...base['publication-date'], day: s['publication-date'].day };
    }
  }
  return base;
}

function parseOrcidWorks(data: OrcidResponse): Publication[] {
  const publications: Publication[] = [];

  for (const group of data.group || []) {
    const summaries = group['work-summary'] || [];
    if (summaries.length === 0) continue;

    const merged = mergeWorkSummaries(summaries);
    const doi = extractDoi(group);

    // Skip duplicates by DOI we've already added
    if (doi && publications.some((p) => p.doi === doi)) continue;
    // For entries without DOI, skip duplicate titles
    if (!doi && publications.some((p) => p.title === merged.title.title.value)) continue;

    publications.push({
      title: merged.title.title.value,
      journal: merged['journal-title']?.value || '',
      year: merged['publication-date']?.year?.value || '',
      doi,
      url: merged.url?.value || (doi ? `https://doi.org/${doi}` : ''),
      type: merged.type,
      displayIndex: parseInt(merged['display-index'] || '0', 10),
    });
  }

  // Sort by year descending, then by title
  publications.sort((a, b) => {
    if (a.year !== b.year) return b.year.localeCompare(a.year);
    return a.title.localeCompare(b.title);
  });

  return publications;
}

// Cached in module scope for the session
let cachedPublications: Publication[] | null = null;

export async function fetchPublications(): Promise<Publication[]> {
  if (cachedPublications) return cachedPublications;

  try {
    const resp = await fetch(ORCID_WORKS_URL, {
      headers: { Accept: 'application/json' },
    });
    if (!resp.ok) throw new Error(`ORCID API returned ${resp.status}`);
    const data: OrcidResponse = await resp.json();
    cachedPublications = parseOrcidWorks(data);
    return cachedPublications;
  } catch (err) {
    console.warn('Failed to fetch ORCID publications:', err);
    throw err;
  }
}

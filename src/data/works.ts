export interface WorkItem {
  id: string;
  title: string;
  titleZh?: string;
  category: string;
  year?: string;
  award?: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

// Placeholder data — pending real content from Puxiang (https://www.puxiang.com/wuxiaofan)
// Puxiang requires slider captcha verification and could not be accessed automatically.
// Replace image paths and details with actual Puxiang project data when available.
// Images should be placed in public/assets/works/ with English kebab-case filenames.

const works: WorkItem[] = [
  {
    id: 'one-hand',
    title: 'One Hand',
    titleZh: '单手测量尺',
    category: 'Industrial Design',
    year: '2021',
    award: 'Spark Silver · Core77 Winner · EPDA Top Design',
    description: 'A one-handed measuring ruler that redefines ergonomic precision, allowing intuitive single-hand operation without compromising accuracy.',
    tags: ['Ergonomic', 'Measuring Tool', 'Universal Design'],
    image: '/assets/works/one-hand.jpg',
    link: 'https://www.puxiang.com/wuxiaofan',
  },
  {
    id: 'pottery',
    title: 'Etiquette of Pottery',
    titleZh: '陶礼',
    category: 'Packaging Design',
    year: '2022',
    award: 'Pentawards Finalist',
    description: 'Traditional ceramic ritual language reimagined through modern packaging design, bridging ancient craftsmanship with contemporary aesthetics.',
    tags: ['Ceramic', 'Cultural Heritage', 'Gift Packaging'],
    image: '/assets/works/pottery.jpg',
    link: 'https://www.puxiang.com/wuxiaofan',
  },
  {
    id: 'reuse',
    title: 'Reuse',
    titleZh: '可持续展示包装',
    category: 'Sustainable Design',
    year: '2021',
    award: 'Spark Finalist · K-DESIGN Finalist',
    description: 'Circular packaging innovation for sustainable display systems, designed for disassembly and material recovery after exhibition use.',
    tags: ['Circular Economy', 'Exhibition', 'Material Innovation'],
    image: '/assets/works/reuse.jpg',
    link: 'https://www.puxiang.com/wuxiaofan',
  },
  {
    id: 'focus',
    title: 'Focus',
    titleZh: '专注力工具',
    category: 'Product Design',
    year: '2022',
    award: 'Spark Finalist',
    description: 'A minimalist attention-management tool that reshapes focus through form — reducing cognitive noise with deliberate tactile interaction.',
    tags: ['Minimalist', 'Cognitive Design', 'Wellness'],
    image: '/assets/works/focus.jpg',
    link: 'https://www.puxiang.com/wuxiaofan',
  },
];

export default works;

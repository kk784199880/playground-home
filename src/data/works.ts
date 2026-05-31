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

// Data extracted from Puxiang — https://www.puxiang.com/wuxiaofan
// Images downloaded from Puxiang CDN and placed in public/assets/works/

const works: WorkItem[] = [
  {
    id: 'one-hand',
    title: 'One Hand',
    titleZh: '单手测量尺',
    category: 'Industrial Design',
    year: '2021',
    award: 'Spark Silver · Core77 Winner · EPDA Top Design',
    description:
      'A one-handed measuring ruler designed for users with single-arm disabilities, allowing them to independently measure objects and curved surfaces. Through an innovative nano-suction mechanism, One Hand enables quick one-handed operation, bringing warmth and dignity to inclusive design.',
    tags: ['Inclusive Design', 'Ergonomic', 'Measuring Tool', 'Nano-Suction'],
    image: '/assets/works/one-hand.jpg',
    link: 'https://www.puxiang.com/galleries/8ad22fb08aa04b890f5473f52b29aa18',
  },
  {
    id: 'pottery',
    title: 'Etiquette of Pottery',
    titleZh: '陶礼',
    category: 'Packaging Design',
    year: '2022',
    award: 'Pentawards Finalist',
    description:
      'A baijiu liquor packaging that blends traditional pottery craftsmanship with bronze vessel aesthetics. The bottle is handcrafted from clay with a cork stopper, featuring calligraphic labels depicting the traditional Chinese bow of respect — transforming a liquor container into a work of art.',
    tags: ['Ceramic Craft', 'Cultural Heritage', 'Liquor Packaging', 'Sustainable'],
    image: '/assets/works/pottery.jpg',
    link: 'https://www.puxiang.com/galleries/b2d9098ab5181a656396251a731bc3c8',
  },
  {
    id: 'reuse',
    title: 'Reuse',
    titleZh: '可持续显示器包装',
    category: 'Sustainable Packaging',
    year: '2021',
    award: 'Red Dot Finalist · Spark Winner',
    description:
      'A sustainable monitor packaging system that transforms into a functional display stand after unboxing. Designed for material recovery and reuse, the corrugated structure eliminates foam and plastic while providing equal or better protection during shipping.',
    tags: ['Circular Economy', 'Structural Packaging', 'Green Design', 'Concept Design'],
    image: '/assets/works/reuse.jpg',
    link: 'https://www.puxiang.com/galleries/8641d02f0f4a558f2b11244010ac92a0',
  },
  {
    id: 'mask',
    title: 'Easy-Disassembly Mask',
    titleZh: '易拆卸口罩',
    category: 'Sustainable Design',
    year: '2021',
    award: 'Spark Bronze · EPDA Honorable Mention',
    description:
      'A modular face mask designed for easy separation of cover and strap, solving the environmental crisis of single-piece disposable masks. The straps use recycled feathers that biodegrade naturally, while the cover attaches via hook-and-loop for quick replacement.',
    tags: ['Medical Design', 'Modular System', 'Biodegradable', 'Sustainable'],
    image: '/assets/works/mask.jpg',
    link: 'https://www.puxiang.com/galleries/6b5460b62e09b6a65788593264040b19',
  },
  {
    id: 'junde',
    title: 'Junde',
    titleZh: '君德·篆书文创家具',
    category: 'Furniture Design',
    year: '2025',
    award: undefined,
    description:
      'A cultural creative furniture series that distills ancient Chinese seal script (篆书) into modern furniture forms. By reinterpreting traditional calligraphy through contemporary design language, each piece makes Chinese cultural heritage tangible and livable in everyday spaces.',
    tags: ['Seal Script', 'Modern Furniture', 'Cultural Heritage', 'Chinese Tradition'],
    image: '/assets/works/junde.jpg',
    link: 'https://www.puxiang.com/galleries/66a09ded66962a33501fd6eea6762480',
  },
];

export default works;

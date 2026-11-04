export type Lang = 'es' | 'en';

export const links = {
  email: 'mailto:mrcacacho@gmail.com',
  emailLabel: 'mrcacacho@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mar%C3%ADa-pacheco-30682820b/',
  github: 'https://github.com/mariacacacho',
  site: 'https://codepen.io/mariacacacho',
  tiktok: 'https://www.tiktok.com/@mariacacacho',
  instagram: 'https://www.instagram.com/mariacacacho/',
  handle: '@mariacacacho',
  cv: '/cv-maria-pacheco.pdf',
  mediakit: 'https://canva.link/mediakit-mariacacacho-2026',
};

export const marquee = [
  'TELUS Digital',
  'KOR, FLUX Inc.',
  'Rutas Orientales',
  'FideClub',
  'Solis Award 2026',
  'UGREEN',
  'OBSBOT',
  'Paperlike',
  'Royal Kludge',
];

type Project = {
  name: string;
  kind: string;
  desc: string;
  stack: string;
  img: string;
  alt: string;
  phone?: boolean;
  tab: string;
  bg: string;
};

type Video = { title: string; views: string; img: string; alt: string; bg: string; url: string };
type Job = { role: string; org: string; dates: string; desc: string };

export type Dict = {
  meta: { title: string; description: string };
  nav: { label: string; projects: string; content: string; experience: string; contact: string; cv: string };
  hello: string;
  bio: string;
  ctaDev: string;
  ctaCreator: string;
  photoAlt: string;
  side1: string;
  side1Line: string;
  side2: string;
  side2Line: string;
  devPills: string[];
  creatorPills: string[];
  projH: [string, string];
  projects: Project[];
  contH: [string, string];
  videos: Video[];
  expH: string;
  jobs: Job[];
  awardsH: string;
  awardFor: string;
  degree: string;
  marqueeLabel: string;
  talk: string;
  talkSub: string;
  cvDownload: string;
};

const projectsBase = {
  ro: { img: '/images/rutas-orientales.jpg', stack: 'Next.js · PostgreSQL · Google Cloud', tab: '#8FB8EE', bg: '#B7D3F6' },
  tienda: { img: '/images/tienda-ro.jpg', stack: 'Next.js · Billing', tab: '#C3E35A', bg: '#DDF28E' },
  fide: { img: '/images/fideclub.jpg', stack: 'React Native · Expo · Express · PostgreSQL', tab: '#F99B5E', bg: '#FDBF94', phone: true },
};

const videosBase = [
  { img: '/images/vid-monitor.jpg', views: '1.4M', bg: '#C9B8E8', url: 'https://www.tiktok.com/@mariacacacho/video/7620623336942472468' },
  { img: '/images/vid-powerbank.jpg', views: '537.3K', bg: '#D7F26B', url: 'https://www.tiktok.com/@mariacacacho/video/7654046463239982357' },
  { img: '/images/vid-widgets.jpg', views: '271.9K', bg: '#B7D3F6', url: 'https://www.tiktok.com/@mariacacacho/photo/7681542172004437269' },
  { img: '/images/vid-tech.jpg', views: '207.2K', bg: '#F6F1E9', url: 'https://www.tiktok.com/@mariacacacho/photo/7638418292108987669' },
];

export const content: Record<Lang, Dict> = {
  es: {
    meta: {
      title: 'María Pacheco — Software Engineer & Tech Creator',
      description:
        'Software Engineer con más de 6 años creando productos web y móviles. Senior Applications Developer en TELUS Digital y creadora de contenido tech.',
    },
    nav: { label: 'Secciones', projects: 'proyectos', content: 'contenido', experience: 'experiencia', contact: 'contacto', cv: 'CV' },
    hello: 'hola, soy maria —',
    bio: 'Software Engineer con más de 6 años creando productos web y móviles, desde el frontend hasta la nube. Senior Applications Developer en TELUS Digital, y en redes comparto el tech que realmente vale la pena.',
    ctaDev: 'ver proyectos',
    ctaCreator: 'ver contenido',
    photoAlt: 'María con lentes y suéter rojo frente a sus libreros',
    side1: 'como engineer',
    side1Line: 'Productos web y móviles, del frontend a la nube.',
    side2: 'como creadora',
    side2Line: 'El tech que realmente vale la pena para tu estilo de vida.',
    devPills: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'Google Cloud', 'UX · Figma'],
    creatorPills: ['home office', 'gadgets', 'productividad', 'iphone tips'],
    projH: ['proyectos', 'que construí'],
    projects: [
      { ...projectsBase.ro, name: 'Rutas Orientales', kind: 'sistema web', desc: 'Sistema de gestión de transporte.', alt: 'Dashboard del sistema de Rutas Orientales con boletos vendidos y turnos del día' },
      { ...projectsBase.tienda, name: 'Tienda online RO', kind: 'e-commerce', desc: 'Tienda en línea para vender boletos de bus de Rutas Orientales, con pasarela de pago.', alt: 'Página de inicio de la tienda de boletos en línea con buscador de viajes' },
      { ...projectsBase.fide, name: 'FideClub', kind: 'app móvil', desc: 'App de tarjetas de lealtad con escaneo QR, notificaciones push y pagos con Stripe.', alt: 'Pantalla de inicio de la app FideClub' },
    ],
    contH: ['lo que', 'comparto'],
    videos: [
      { ...videosBase[0], title: 'mi monitor ultrawide', alt: 'Escritorio con monitor ultrawide curvo' },
      { ...videosBase[1], title: 'power bank UGREEN · gadgets que compraría otra vez', alt: 'Manos sosteniendo un power bank UGREEN' },
      { ...videosBase[2], title: 'widgets que necesitas para tu iphone', alt: 'iPhone con pantalla de bloqueo personalizada junto a un teclado' },
      { ...videosBase[3], title: 'tech en la que realmente vale la pena invertir', alt: 'María frente a sus libreros' },
    ],
    expH: 'experiencia',
    jobs: [
      { role: 'Senior Applications Developer', org: 'TELUS Digital · Vancouver, Canadá (remoto)', dates: 'may 2022 — actual', desc: 'Responsable del desarrollo y soporte en producción de requerimientos a la medida en tecnologías frontend y backend.' },
      { role: 'Fullstack Developer & Consultant', org: 'Freelance · Ciudad de Guatemala', dates: '2019 — actual', desc: 'Productos web y móviles de punta a punta para clientes: arquitectura, desarrollo, infraestructura en la nube y facturación.' },
      { role: 'Jr. Fullstack Developer', org: 'KOR, FLUX Inc. · Vancouver, Canadá (remoto)', dates: 'abr 2020 — abr 2022', desc: 'Desarrollo fullstack de aplicaciones web con React, Node.js, Sass, Jenkins y AWS.' },
    ],
    awardsH: 'reconocimiento y formación',
    awardFor: 'Por mi trabajo en diversidad e inclusión, por promover a las mujeres en tecnología y por la mentoría de nuevos ingenieros.',
    degree: 'ing. en informática',
    marqueeLabel: 'Empresas, clientes, marcas y reconocimientos',
    talk: 'hablemos.',
    talkSub: 'Proyectos de software, colaboraciones con marcas o charlas. Desde Ciudad de Guatemala, disponible para trabajo remoto.',
    cvDownload: 'descargar CV',
  },
  en: {
    meta: {
      title: 'María Pacheco — Software Engineer & Tech Creator',
      description:
        'Fullstack engineer with 6+ years building web and mobile products. Senior Applications Developer at TELUS Digital and tech content creator.',
    },
    nav: { label: 'Sections', projects: 'projects', content: 'content', experience: 'experience', contact: 'contact', cv: 'CV' },
    hello: "hi, i'm maria —",
    bio: 'Fullstack engineer with 6+ years building web and mobile products, from frontend to the cloud. Senior Applications Developer at TELUS Digital, and online I share the tech that is actually worth it.',
    ctaDev: 'see projects',
    ctaCreator: 'see content',
    photoAlt: 'María in glasses and a red sweater in front of her bookshelves',
    side1: 'as an engineer',
    side1Line: 'Web and mobile products, from frontend to the cloud.',
    side2: 'as a creator',
    side2Line: 'The tech that is actually worth it for your lifestyle.',
    devPills: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'Google Cloud', 'UX · Figma'],
    creatorPills: ['home office', 'gadgets', 'productivity', 'iphone tips'],
    projH: ['projects', 'i built'],
    projects: [
      { ...projectsBase.ro, name: 'Rutas Orientales', kind: 'web system', desc: 'Transportation management system.', alt: 'Rutas Orientales dashboard with tickets sold and today’s shifts' },
      { ...projectsBase.tienda, name: 'Tienda online RO', kind: 'e-commerce', desc: 'Online bus-ticket store for Rutas Orientales, with payment-gateway integration.', alt: 'Online ticket store home page with trip search' },
      { ...projectsBase.fide, name: 'FideClub', kind: 'mobile app', desc: 'Loyalty-card app with QR scanning, push notifications and Stripe payments.', alt: 'FideClub app welcome screen' },
    ],
    contH: ['what i', 'share'],
    videos: [
      { ...videosBase[0], title: 'my ultrawide monitor', alt: 'Desk with a curved ultrawide monitor' },
      { ...videosBase[1], title: 'UGREEN power bank · gadgets I’d buy again', alt: 'Hands holding a UGREEN power bank' },
      { ...videosBase[2], title: 'widgets you need on your iPhone', alt: 'iPhone with a custom lock screen next to a keyboard' },
      { ...videosBase[3], title: 'tech that is actually worth investing in', alt: 'María in front of her bookshelves' },
    ],
    expH: 'experience',
    jobs: [
      { role: 'Senior Applications Developer', org: 'TELUS Digital · Vancouver, Canada (remote)', dates: 'May 2022 — Present', desc: 'Responsible for development and production support of custom requirements in frontend and backend technologies.' },
      { role: 'Fullstack Developer & Consultant', org: 'Freelance · Guatemala City', dates: '2019 — Present', desc: 'End-to-end web and mobile products for clients: architecture, development, cloud infrastructure and billing.' },
      { role: 'Jr. Fullstack Developer', org: 'KOR, FLUX Inc. · Vancouver, Canada (remote)', dates: 'Apr 2020 — Apr 2022', desc: 'Fullstack development of web applications with React, Node.js, Sass, Jenkins and AWS.' },
    ],
    awardsH: 'recognition & learning',
    awardFor: 'For diversity and inclusion work, advocacy for women in tech and mentorship of new engineers.',
    degree: 'b.s. informatics engineering',
    marqueeLabel: 'Companies, clients, brands and recognition',
    talk: "let's talk.",
    talkSub: 'Software projects, brand collabs or talks. Based in Guatemala City, open to remote work.',
    cvDownload: 'download CV',
  },
};

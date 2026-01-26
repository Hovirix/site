export const languages = {
  en: 'ENG',
  fr: 'FRA',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Homepage Hero
    'hero.greeting': "Hi, I'm Hovirix 👋",
    'hero.description': 'Developer and creator building modern web applications. Passionate about clean code, elegant solutions, and bringing ideas to life.',
    'hero.cta.blog': 'Read my Blog',
    'hero.cta.work': 'View My Work',
    
    // About Page
    'about.title': 'About Me',
    'about.subtitle': 'Infrastructure engineer focused on security, automation, and homelab systems.',
    'about.headline': 'Building secure, automated infrastructure.',
    'about.intro1': 'I specialize in Linux infrastructure, security operations, and DevOps automation. My expertise comes from designing and maintaining production-grade homelab environments with a focus on security, observability, and infrastructure as code.',
    'about.intro2': 'Passionate about blue team security, identity management, network engineering, and building resilient systems using modern infrastructure tools.',
    'about.techstack': 'Tech Stack & Tools',
    'about.techstack.subtitle': 'Technologies I work with daily',
    'about.tech.infrastructure': 'Infrastructure',
    'about.tech.containers': 'Containers & CI/CD',
    'about.tech.networking': 'Networking',
    'about.tech.security': 'Security & Monitoring',
    'about.connect.title': "Let's Connect",
    'about.connect.description': 'Interested in infrastructure, security, or homelab discussions? Check out my work or get in touch.',
    'about.connect.github': 'View GitHub',
    'about.connect.contact': 'Get in Touch',
    
    // Contact Page
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch with me.',
    'contact.form.firstname': 'First Name',
    'contact.form.lastname': 'Last Name',
    'contact.form.company': 'Company',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    
    // Blog Page
    'blog.title': 'Blog',
    'blog.subtitle': 'Thoughts on infrastructure, security, and technology.',
    
    // Footer
    'footer.copyright': 'All rights reserved.',
  },
  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Homepage Hero
    'hero.greeting': "Salut, je suis Hovirix 👋",
    'hero.description': 'Développeur et créateur qui construit des applications web modernes. Passionné par le code propre, les solutions élégantes et la concrétisation des idées.',
    'hero.cta.blog': 'Lire mon Blog',
    'hero.cta.work': 'Voir mon Travail',
    
    // About Page
    'about.title': 'À propos de moi',
    'about.subtitle': 'Ingénieur infrastructure spécialisé en sécurité, automatisation et systèmes homelab.',
    'about.headline': 'Construction d\'infrastructures sécurisées et automatisées.',
    'about.intro1': 'Je me spécialise dans l\'infrastructure Linux, les opérations de sécurité et l\'automatisation DevOps. Mon expertise provient de la conception et de la maintenance d\'environnements homelab de qualité production, avec un accent sur la sécurité, l\'observabilité et l\'infrastructure as code.',
    'about.intro2': 'Passionné par la sécurité blue team, la gestion des identités, l\'ingénierie réseau et la construction de systèmes résilients utilisant des outils d\'infrastructure modernes.',
    'about.techstack': 'Stack Technique & Outils',
    'about.techstack.subtitle': 'Technologies que j\'utilise quotidiennement',
    'about.tech.infrastructure': 'Infrastructure',
    'about.tech.containers': 'Conteneurs & CI/CD',
    'about.tech.networking': 'Réseaux',
    'about.tech.security': 'Sécurité & Monitoring',
    'about.connect.title': 'Restons en Contact',
    'about.connect.description': 'Intéressé par l\'infrastructure, la sécurité ou les discussions homelab ? Consultez mon travail ou contactez-moi.',
    'about.connect.github': 'Voir GitHub',
    'about.connect.contact': 'Me Contacter',
    
    // Contact Page
    'contact.title': 'Contact',
    'contact.subtitle': 'Entrez en contact avec moi.',
    'contact.form.firstname': 'Prénom',
    'contact.form.lastname': 'Nom',
    'contact.form.company': 'Entreprise',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Numéro de Téléphone',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer le Message',
    
    // Blog Page
    'blog.title': 'Blog',
    'blog.subtitle': 'Réflexions sur l\'infrastructure, la sécurité et la technologie.',
    
    // Footer
    'footer.copyright': 'Tous droits réservés.',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: string): string {
    return (ui[lang] as Record<string, string>)[key] || (ui[defaultLang] as Record<string, string>)[key];
  }
}

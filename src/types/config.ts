export type LocalizedString = {
  en: string;
  es: string;
};

export type NavBarLink = {
  title: LocalizedString;
  url: string;
  external?: boolean;
};

export type SocialLink = {
  title: LocalizedString;
  url: string;
  icon: string;
  external?: boolean;
};

export type Identity = {
  name: string;
  logo: string;
  avatar: string;
  email: string;
};

export type SEOInfo = {
  title: string;
  description: string;
  image: string;
};

export type HomePageContent = {
  seo: SEOInfo;
  role: LocalizedString;
  description: LocalizedString;
  socialLinks: SocialLink[];
  links: {
    title: LocalizedString;
    url: string;
    external?: boolean;
  }[];
};

export type ResumeItem = {
  title: LocalizedString;
  company: {
    name: string;
    image: string;
    url: string;
  };
  date: string;
};

export type AboutPageContent = {
  seo: SEOInfo;
  subtitle: LocalizedString;
  about: {
    description: LocalizedString;
    image_l: {
      url: string;
      alt: string;
    };
    image_r: {
      url: string;
      alt: string;
    };
  };
  education: {
    description: LocalizedString;
    items: ResumeItem[];
  };
  work: {
    description: LocalizedString;
    items: ResumeItem[];
  };
  connect: {
    description: LocalizedString;
    links: SocialLink[];
  };
};

export type Project = {
  title: string;
  description: string;
  image: string;
  year: string;
  url: string;
};

export type ProjectPageContent = {
  seo: SEOInfo;
  subtitle: LocalizedString;
  projects: Project[];
};

export type BlogPageContent = {
  seo: SEOInfo;
  subtitle: LocalizedString;
};

import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Fernando Valenciano",
  logo: "/me1.jpeg",
  avatar: "/me2.jpeg",
  email: "fernando.valenciano@iac.es",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: { en: "Home", es: "Inicio" },
    url: "/",
  },
  {
    title: { en: "About", es: "Sobre mí" },
    url: "/about",
  },
  {
    title: { en: "Projects", es: "Proyectos" },
    url: "/projects",
  },
  {
    title: { en: "Blog", es: "Blog" },
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: { en: "GitHub", es: "GitHub" },
    url: "https://github.com/fvalenciano",
    icon: "mdi:github",
    external: true,
  },
  {
    title: { en: "Mail", es: "Correo" },
    url: "mailto:fernando.valenciano@iac.es",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Fernando Valenciano",
    description:
      "Full time student PhD Astrophysics student based on the beautiful island of Tenerife, Spain.",
    image: identity.logo,
  },
  role: {
    en: "PhD Astrophysics Student at Instituto de Astrofísica de Canarias (IAC)",
    es: "Doctorando en Astrofísica en el Instituto de Astrofísica de Canarias (IAC)",
  },
  description: {
    en: "Full time student PhD Astrophysics student based on the beautiful island of Tenerife, Spain.",
    es: "Doctorando en Astrofísica, viviendo en la hermosa isla de Tenerife, España.",
  },
  socialLinks: socialLinks,
  links: [
    {
      title: { en: "My Projects", es: "Mis proyectos" },
      url: "/projects",
    },
    {
      title: { en: "About Me", es: "Sobre mí" },
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Fernando Valenciano",
    description:
      "Full time student PhD Astrophysics student based on the beautiful island of Tenerife, Spain.",
    image: identity.logo,
  },
  subtitle: { en: "Who am I?", es: "¿Quién soy?" },
  about: {
    description: {
      en: `
I am Fernando, born in Madrid in June 2001. I like to think of myself as an ordinary human with a persistent curiosity: a long-standing fascination with the Universe and with understanding who we are, why we are here, and why both the Earth and the cosmos are filled with so many striking and beautiful things. <br><br>
My path toward astrophysics was not sudden, but it was decisive. During my school years, I was fortunate to encounter teachers who did more than transmit knowledge: they cultivated in me a genuine interest in reality in all its forms. At the age of fifteen, I came across *A Brief History of Time* by Stephen Hawking. That reading marked a turning point. My perception of time and scale changed profoundly; the Earth became a small, fragile point within the vastness of an ancient Universe that seemed to have been waiting patiently to be understood. With the innocent determination typical of youth, I made a quiet but firm decision: I would dedicate my life to learning something more about the reasons behind all of this.<br><br>
Learning about the Universe is a process with no clear endpoint. It is demanding, absorbing, and at times overwhelming. Progress does not come from having all the answers, but from learning how to ask meaningful questions. By observing galaxies, particles, or radiation across different energy ranges, and by confronting those observations with theoretical models grounded in physical laws, we advance—always tentatively. Every theory is falsifiable, and it is precisely this constant dialogue between data and theory that offers the most reliable path toward deeper understanding.<br><br>
Although I am still early in my career, I have already learned that astrophysics is built by a community of people who are both highly rigorous and deeply passionate. Collaborating with them, and learning from their expertise and curiosity, has become one of the most rewarding aspects of my work.`, // Markdown is supported
      es: `
Soy Fernando, vengo de un pueblo de la sierra de Madrid. Me considero una persona normal, pero con una curiosidad persistente: desde siempre me ha fascinado el Universo y la necesidad de entender quiénes somos, por qué estamos aquí y por qué tanto la Tierra como el cosmos están llenos de cosas tan impresionantes y bellas. <br><br>
Mi camino hacia la astrofísica no fue repentino, aunque sí definitivo. Durante mis años de colegio tuve la suerte de cruzarme con profesores que no se limitaron a enseñar contenidos, sino que despertaron en mí un interés genuino por comprender la realidad en todas sus dimensiones. A los quince años cayó en mis manos *Breve historia del tiempo*, de Stephen Hawking, y aquella lectura supuso un antes y un después. Mi forma de entender el tiempo y la escala del Universo cambió por completo: nuestro planeta pasó a ser un punto pequeño y frágil dentro de la inmensidad de un cosmos antiguo que parecía llevar siglos esperando a ser comprendido. Con la determinación ingenua propia de la juventud, tomé entonces una decisión silenciosa pero firme: dedicaría mi vida a intentar entender un poco mejor el porqué de todo esto. <br><br>
Aprender sobre el Universo es un proceso que no tiene un final claro. Es exigente, absorbente y, en ocasiones, abrumador. El avance no consiste en tener todas las respuestas, sino en aprender a formular buenas preguntas. Observando galaxias, partículas o radiación en distintos rangos de energía, y contrastando esas observaciones con modelos teóricos basados en leyes físicas, vamos avanzando —siempre con cautela—. Toda teoría puede ser refutada, y es precisamente ese diálogo constante entre datos y teoría lo que nos permite acercarnos, poco a poco, a una comprensión más profunda de la realidad. <br><br>
Aunque todavía estoy al inicio de mi carrera, ya he aprendido que la astrofísica se construye de forma colectiva, gracias a personas que combinan un enorme rigor con una pasión honesta por el conocimiento. Colaborar con ellas y aprender de su experiencia y curiosidad es, sin duda, uno de los aspectos más enriquecedores de mi trabajo.`, // Markdown is supported
    },
    image_l: {
      url: "/Picture 3.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/Picture 2.png",
      alt: "Right Picture",
    },
  },
  work: {
    description: {
      en: `I've worked with a few research institutes. Here are some of the projects I've worked on.`, // Markdown is supported
      es: `He trabajado con algunos institutos de investigación. Aquí hay algunos de los proyectos en los que he trabajado.`, // Markdown is supported
    },
    items: [
      {
        title: { en: "PhD Candidate", es: "Doctorando" },
        company: {
          name: "IAC, Tenerife (Spain)",
          image: "/logo_iac.png",
          url: "",
        },
        date: "2024 - Present",
      },
      {
        title: {
          en: "ESAC Outreach & Public Engagement",
          es: "Divulgación y participación pública (ESAC)",
        },
        company: {
          name: "ESAC, Madrid (Spain)",
          image: "/logo_esa.png",
          url: "",
        },
        date: "2023 - 2024",
      },
    ],
  },
  education: {
  description: {
    en: `My academic background and training.`,
    es: `Mi formación académica.`,
  },
  items: [
    {
      title: { en: "PhD in Astrophysics", es: "Doctorado en Astrofísica" },
      company: {
        name: "IAC, Tenerife (Spain)",
        image: "/logo_iac.png",
        url: "https://www.iac.es/",
      },
      date: "2024 – Present",
    },
    {
      title: { en: "MSc in Theoretical Physics", es: "Máster en Física Teórica" },
      company: {
        name: "Universidad Autónoma de Madrid (Spain)",
        image: "/logo_uam.png",   // pon el archivo o usa el mismo logo si no tienes
        url: "https://www.ull.es/",
      },
      date: "2023 – 2024",
    },
    {
      title: { en: "BSc in Physics", es: "Grado en Física" },
      company: {
        name: "Universidad Complutense de Madrid (Spain)",
        image: "/logo_ucm.png",
        url: "https://www.ucm.es/",
      },
      date: "2019 – 2023",
    },
  ],
},

  connect: {
    description: {
      en: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
      es: `Siempre me interesa conocer gente nueva y aprender cosas nuevas. Siéntete libre de conectar conmigo en cualquiera de las siguientes plataformas.`, // Markdown is supported
    },
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Fernando Valenciano",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: {
    en: "Check out what I've been working on.",
    es: "Mira en qué he estado trabajando.",
  },
  projects: [
    {
      title: "Cored galaxies in cuspy Dark Matter halos",
      description: "In this paper we have been analysing the UFD photometric data to see wether the stellar density distribution is compatible with what we know about the gravitational potential created by the dark matter halo assembly structure formation theory from LCDM.",
      image: "/fornax.jpg",
      year: "2025",
      url: "https://ui.adsabs.harvard.edu/abs/2025arXiv251215886V/abstract",
    },

  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Fernando Valenciano",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: { en: "Thoughts, stories and ideas.", es: "Pensamientos, historias e ideas." },
};

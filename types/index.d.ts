export { Degree, AboutInfo, ExternalLink, Experience };

declare global {
  interface Degree {
    name: string;
    college: ExternalLink;
  }

  interface AboutInfo {
    items: string[];
    degree?: Degree;
  }

  interface ExternalLink {
    name: string;
    link: string;
  }
  interface Experience {
    title: string;
    company: string;
    location: string;
    dates: string;
    items: string[];
    links?: ExternalLink[];
    skills: string[];
  }
}

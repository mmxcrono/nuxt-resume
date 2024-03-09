export interface Degree {
  name: string;
  college: {
    name: string;
    link: string;
  };
}

export interface AboutInfo {
  items: string[];
  degree?: Degree;
}

export interface About {
  id: string;
  bio: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  url?: string;
}

export interface Conference {
  id: string;
  title: string;
  year: string;
  location: string;
  details: string;
}

export interface Contact {
  id: string;
  email: string;
  phone: string;
  whatsapp: string;
  telegram: string;
  linkedin: string;
  github: string;
}

export interface Education {
  id: string;
  degree: string;
  university: string;
  year: string;
  details: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
}
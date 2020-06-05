export interface SocialLink {
  link: string;
  icon: string;
}
export interface Role {
  name: string;
  year: string;
}

export interface Summary {
  heading: string;
  description: string;
}

export interface AdditionalInfo {
  title: string;
  info: string[];
}

export interface WorkExp {
  designation: string;
  companyName: string;
  workingTime: string;
  requirement: string[];
  techs: string[];
}

export interface Education {
  instituteName: string;
  duration: string;
  degree: string;
  sub: string;
}

export interface PortfolioData {
  profileImg: string;
  socialLink: SocialLink[];
  roles: Role[];
  summary: Summary[];
  additionalInfo: AdditionalInfo[];
  skills: string[];
  workExp: WorkExp[];
  education: Education[];
}

export interface ProfileResponse {
  success: boolean;
  data: PortfolioData;
  error: string[];
}

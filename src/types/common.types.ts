export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface HeroData {
  headline: string;
  subtext: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage: string;
}

export interface FooterData {
  logo: string;
  quickLinks: NavItem[];
  contact: ContactInfo;
  socialLinks: SocialLink[];
  copyright: string;
}

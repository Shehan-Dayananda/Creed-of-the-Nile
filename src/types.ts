export interface CodexEntry {
  id: string;
  title: string;
  subtitle: string;
  category: 'HISTORICAL SITE' | 'CHARACTER' | 'RITUAL' | 'FACTION';
  year: string;
  location: string;
  shortDesc: string;
  longDesc: string[];
  coordinates: string;
}

export interface CharacterDossier {
  id: string;
  name: string;
  role: string;
  actor: string;
  bio: string;
  allegiance: string;
  weapons: string[];
  quote: string;
}


export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  fullDescription: string;
  whoFor: string;
  methods: string[];
}

export interface Location {
  city: string;
  state: string;
  address: string;
  phone: string;
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
}

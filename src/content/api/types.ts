export type PropRow = {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
};

export type ApiSpec = {
  component: string;
  description?: string;
  props: PropRow[];
  notes?: string[];
};

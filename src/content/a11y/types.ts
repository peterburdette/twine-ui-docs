export type A11yItem = {
  /** Optional short label that can be bolded in the list */
  label?: string;
  /** The main sentence for the bullet */
  text: string;
};

export type A11ySpec = {
  component: string;
  items: A11yItem[];
  notes?: string[];
};

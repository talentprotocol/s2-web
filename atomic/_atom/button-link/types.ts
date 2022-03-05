export enum Type {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

export type AvailableTargets = "self" | "blank" | "parent" | "top";

export interface Props {
  content: string;
  children?: JSX.Element | JSX.Element[];
  type?: Type;
  href: string;
  target?: AvailableTargets;
}

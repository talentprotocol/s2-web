export enum Type {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

export interface Props {
  content: string;
  children?: JSX.Element | JSX.Element[];
  type?: Type;
  href: string;
  target?: string;
}

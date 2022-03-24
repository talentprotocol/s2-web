export enum Variant {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

export interface Props {
  content: string;
  children?: JSX.Element | JSX.Element[];
  variant?: Variant;
  className: string;
}

export enum Type {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

export interface StyledProps {
  type: Type;
  isCentered?: boolean;
}

export interface Props extends StyledProps {
  content: string;
}

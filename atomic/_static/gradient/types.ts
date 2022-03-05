export enum GradientType {
  HIDDEN,
  RIGHT = "RIGHT",
  LEFT = "LEFT",
  BOTTOM = "BOTTOM",
  DEFAULT = "DEFAULT",
}

export interface Props {
  type: GradientType;
}

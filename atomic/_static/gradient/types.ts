export enum GradientType {
  HIDDEN,
  RIGHT = "RIGHT",
  LEFT = "LEFT",
  BOTTOM = "BOTTOM",
  SIDEBAR = "SIDEBAR",
  DEFAULT = "DEFAULT",
}

export interface Props {
  type: GradientType;
}

export type AvailableColors =
  | "BLACK"
  | "WHITE"
  | "GREY"
  | "LIGHT_GREY"
  | "DARK_GREY"
  | "PURPLE"
  | "YELLOW";

export const COLORS: Record<AvailableColors, string> = {
  BLACK: "#040404",
  WHITE: "#ffffff",
  GREY: "#686c74",
  DARK_GREY: "#2d2f32",
  LIGHT_GREY: "#aaadb3",
  PURPLE: "#7a55ff",
  YELLOW: "#fcfe6b",
};

interface LogoSize {
  height: number;
  width: number;
}

export const LOGO_SIZE = {
  DEFAULT: { height: 20, width: 148 },
  MEDIUM: { height: 25, width: 188 },
};

export interface Props {
  size?: LogoSize;
}

import { breakPoints } from './break-points';
import { color } from './color';
import { lightTheme } from './core-theme';

export const theme = {
  coreColor: lightTheme,
  breakPoints,
  color,
} as const;

export type Theme = typeof theme;

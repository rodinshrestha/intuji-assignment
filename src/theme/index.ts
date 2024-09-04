import { breakPoints } from './break-points';
import { lightTheme } from './core-theme';

export const theme = {
  coreColor: lightTheme,
  breakPoints,
} as const;

export type Theme = typeof theme;

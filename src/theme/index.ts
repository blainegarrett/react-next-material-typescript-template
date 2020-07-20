// Define Theme to use for Material-UI

import { createMuiTheme, Theme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        accentFontFamily: string
    }
    interface ThemeOptions {
        accentFontFamily: string
    }
}

const muiTheme: Theme = createMuiTheme({
  // Custom Variables
  accentFontFamily: "'Permanent Marker', cursive",

  // MUI Typography Overrides
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: process.env.NEXT_PUBLIC_THEME_BACKGROUND,
          color: process.env.NEXT_PUBLIC_THEME_FONT_COLOR,
        },
      },
    },
  },
});
export default muiTheme;

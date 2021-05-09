import CenturyGothic from '../fonts/century_gothic.ttf';
import CenturyGothicBold from '../fonts/century_gothic_bold.ttf'
import { createMuiTheme } from '@material-ui/core/styles';

const CENTURY_GOTHIC = {
    fontFamily: 'CenturyGothic',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('CenturyGothic'),
      local('CenturyGothicRegular'),
      url(${CenturyGothic}) format('truetype')
    `,
  };

  const CENTURY_GOTHIC_BOLD = {
    fontFamily: 'CenturyGothic',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `
      local('CenturyGothic),
      local('CenturyGothic-Bold'),
      url(${CenturyGothicBold}) format('truetype')
    `,
  };

  export const THEME = createMuiTheme({
    typography: {
      fontFamily: [
        'CenturyGothic',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [CENTURY_GOTHIC,CENTURY_GOTHIC_BOLD],
        },
      },
    },
  });
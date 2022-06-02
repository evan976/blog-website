import { DefaultTheme } from 'styled-components'

const light = {
  bg: {
    primary: '#f0f0f0',
    secondary: '#ffffff',
    inset: '#e2e4e8',
    input: 'rgba(65, 67, 78, 0.12)'
  },
  text: {
    primary: '#050505',
    secondary: '#2f3037',
    tertiary: '#525560',
    quarternary: '#9194a1',
    placeholder: 'rgba(82, 85, 96, 0.5)',
    link: '#007fff',
  },
  hover: {
    primary: '#007fff',
    secondary: '#fafafa',
  }
}

const dark = {
  bg: {
    primary: 'rgba(34, 34, 34, 1)',
    secondary: '#444444',
    inset: '#111111',
    input: 'rgba(191, 193, 201, 0.12)',
  },
  text: {
    primary: '#fbfbfc',
    secondary: '#e3e4e8',
    tertiary: '#a9abb6',
    quarternary: '#6c6f7e',
    placeholder: 'rgba(145, 148, 161, 0.5)',
    link: '#007fff',
  },
  hover: {
    primary: '#007fff',
    secondary: 'rgba(145, 148, 161, 0.05)',
  }
}

const defaultTheme = {
  fontSizes: [
    '12px',
    '14px',
    '16px',
    '18px',
    '22px',
    '26px',
    '32px',
    '40px'
  ],
  fontWeights: {
    body: 400,
    subheading: 500,
    link: 600,
    bold: 700,
    heading: 800
  },
  lineHeights: {
    body: 1.5,
    heading: 1.3,
    code: 1.6
  }
}

export const lightTheme: DefaultTheme = { ...defaultTheme, ...light }
export const darkTheme: DefaultTheme = { ...defaultTheme, ...dark }
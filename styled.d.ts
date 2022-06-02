import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: {
      primary: string
      secondary: string
      inset: string
      input: string
    }
    text: {
      primary: string
      secondary: string
      tertiary: string
      quarternary: string
      placeholder: string
      link: string
    }
    hover: {
      primary: string
      secondary: string
    }
    fontSizes: Array<string>
    fontWeights: {
      body: number
      subheading: number
      link: number
      bold: number
      heading: number
    }
    lineHeights: {
      body: number
      heading: number
      code: number
    }
  }
}
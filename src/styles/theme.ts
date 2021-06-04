const darkPalette = {
  contentBackground: '#191919',
  navBackground: '#343434',
  textColor: '#9e9e9e',
  altTextColor: '#FFFFFF',
  paletteDefault: '#FFFFFF',
}
const lightPalette = {
  contentBackground: '#d3d3d3',
  navBackground: '#FFFFFF',
  textColor: '#696969',
  altTextColor: '#343434',
  paletteDefault: '#000000',
}

const fontSizes = {
  xSmall: 12,
  small: 14,
  root: 16,
  medium: 18,
  large: 20,
  xLarge: 24,
  xxLarge: 28,
  xxxLarge: 36,
  largest: 48,
}

export const device = {
  tablet: `(max-width: '768px)`,
  laptop: `(max-width: '1024px')`,
}

export const darkTheme = {
  ...darkPalette,
  fontSizes,
  device,
}

export const lightTheme = {
  ...lightPalette,
  fontSizes,
  device,
}

export const beautify = (str: string): string =>
  (str[0].toUpperCase() + str.slice(1)).replaceAll("_", " ");

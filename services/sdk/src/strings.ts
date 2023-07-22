export const capitalize = (string: string) =>
  `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

export const getEnvironmentString = (strings: {
  dev: string;
  production: string;
}) =>
  process.env.NODE_ENV === "development"
    ? strings.dev
    : strings.production;

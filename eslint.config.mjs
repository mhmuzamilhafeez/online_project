import nextConfig from 'eslint-config-next/core';

export default [
  ...nextConfig,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "react-hooks/rules-of-hooks": "warn",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];

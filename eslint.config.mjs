import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import json from '@eslint/json';
import css from '@eslint/css';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // =========================
  // JavaScript / JSX
  // =========================
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
  },

  // =========================
  // React recommended
  // =========================
  pluginReact.configs.flat.recommended,

  // React JSX runtime (React 17+)
  pluginReact.configs.flat['jsx-runtime'],

  // =========================
  // React overrides
  // =========================
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react: pluginReact,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
    },
  },

  // =========================
  // JSON
  // =========================
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },

  // =========================
  // CSS
  // =========================
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
  },
]);

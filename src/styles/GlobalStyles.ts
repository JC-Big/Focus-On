import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: background-color 0.3s ease, color 0.3s ease;
    min-height: 100vh;
  }

  html.dark {
    color-scheme: dark;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
  }

  /* Glassmorphism helpers */
  .glass {
    background: ${({ theme }) => theme.colors.surface};
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 1rem;
  }

  .app-container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    background: ${({ theme }) => theme.colors.background};
  }

  /* Smooth scrollbar for webkit */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.textSecondary};
  }

  /* Selection color */
  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

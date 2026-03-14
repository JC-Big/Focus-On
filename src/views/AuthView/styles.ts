import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.background};
`;

export const AuthCard = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2.5rem 2rem;
  border-radius: 1.5rem; /* rounded-3xl */
  box-shadow: ${({ theme }) => theme.shadows.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2rem;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.primaryGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 500;
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}33;
    }
  }
`;

export const FormOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: pointer;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const PrimaryButton = styled.button`
  width: 100%;
  padding: 0.875rem;
  border-radius: 0.75rem; // rounded-xl
  background: ${({ theme }) => theme.colors.primaryGradient};
  color: white;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 0.5rem;
  transition: opacity 0.2s, transform 0.1s;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 1.5rem 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;

  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.border};
  }

  span {
    padding: 0 1rem;
  }
`;

export const SocialButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: center;
`;

export const SocialButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const FooterText = styled.div`
  margin-top: 2rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  button {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    margin-left: 0.25rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ThemeToggle = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  padding: 0.6rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
    background: ${({ theme }) => theme.colors.surfaceHover};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

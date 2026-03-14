import styled from 'styled-components';

export const TabsContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 9999px;
  padding: 0.5rem;
  margin: 2rem 0;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const TabButton = styled.button<{ $isActive?: boolean }>`
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ theme, $isActive }) => ($isActive ? 'white' : theme.colors.textSecondary)};
  background: ${({ theme, $isActive }) => ($isActive ? theme.colors.primaryGradient : 'transparent')};
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme, $isActive }) => ($isActive ? 'white' : theme.colors.text)};
    background: ${({ theme, $isActive }) => ($isActive ? theme.colors.primaryGradient : theme.colors.surfaceHover)};
  }
`;

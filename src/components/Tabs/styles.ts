import styled from 'styled-components';

export const TabsContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.surface};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 9999px;
  padding: 0.35rem;
  margin: 2rem auto;
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: max-content;
  max-width: 100%;
  overflow-x: auto;
  
  /* Hide scrollbar for cleaner look */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

export const TabButton = styled.button<{ $isActive?: boolean }>`
  flex: 1;
  white-space: nowrap;
  padding: 0.65rem 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.9rem;
  color: ${({ theme, $isActive }) => ($isActive ? 'white' : theme.colors.textSecondary)};
  background: ${({ theme, $isActive }) => ($isActive ? theme.colors.primaryGradient : 'transparent')};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({ theme, $isActive }) => ($isActive ? theme.shadows.sm : 'none')};

  &:hover {
    color: ${({ theme, $isActive }) => ($isActive ? 'white' : theme.colors.text)};
    background: ${({ theme, $isActive }) => ($isActive ? theme.colors.primaryGradient : theme.colors.surfaceHover)};
  }
`;

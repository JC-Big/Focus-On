import styled from 'styled-components';

export const DetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1.25rem 1rem;
  }
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  backdrop-filter: blur(12px);
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.surfaceHover};
    transform: translateX(-4px);
  }
`;

export const DetailHeader = styled.div<{ $color: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1.25rem;
  backdrop-filter: blur(16px);

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const DetailIconContainer = styled.div<{ $color: string }>`
  width: 4rem;
  height: 4rem;
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  color: white;
  box-shadow: 0 6px 20px -4px ${({ $color }) => $color}50;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: ${({ $color }) => $color};
    opacity: 0.85;
    z-index: -1;
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    letter-spacing: -0.02em;

    @media (max-width: 640px) {
      font-size: 1.35rem;
    }
  }
`;

export const AddButton = styled.button<{ $color: string }>`
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  background: ${({ $color }) => $color};
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 16px -2px ${({ $color }) => $color}50;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px -2px ${({ $color }) => $color}60;
  }
  
  &:active {
    transform: translateY(0);
  }

  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
  }
`;

export const FormCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1.25rem;
  padding: 1.5rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  animation: slideDown 0.3s ease-out;

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;

  label {
    font-size: 0.825rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  input {
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.95rem;
    outline: none;
    transition: border-color 0.2s;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
    }
  }
`;

export const FormActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;

  @media (min-width: 640px) {
    margin-top: 0;
  }
`;

export const ActionButton = styled.button<{ $variant?: 'primary' | 'secondary'; $color?: string }>`
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s;

  ${({ $variant, theme, $color }) => $variant === 'primary' ? `
    background: ${$color || theme.colors.primary};
    color: white;
    box-shadow: 0 4px 12px -2px ${$color || theme.colors.primary}40;
    &:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }
  ` : `
    background: transparent;
    color: ${theme.colors.textSecondary};
    border: 1px solid ${theme.colors.border};
    &:hover {
      background: ${theme.colors.surfaceHover};
      color: ${theme.colors.text};
    }
  `}
`;

export const ProgressCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1.25rem;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
`;

export const ProgressTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  letter-spacing: -0.01em;
`;

export const ProgressLabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-weight: 500;
  font-size: 0.9rem;

  span:last-child {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const HistoryContainer = styled.div`
  margin-top: 2.5rem;
`;

export const HistoryTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  letter-spacing: -0.01em;
`;

export const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const HistoryItemBase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.2s;

  &:hover {
    transform: translateX(4px);
    background: ${({ theme }) => theme.colors.surfaceHover};
  }
`;

export const HistoryItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  strong {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.text};
  }

  span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const HistoryItemAmount = styled.div<{ $color: string }>`
  font-weight: 700;
  font-size: 1.05rem;
  color: transparent;
  background: ${({ $color }) => $color};
  -webkit-background-clip: text;
  background-clip: text;
`;

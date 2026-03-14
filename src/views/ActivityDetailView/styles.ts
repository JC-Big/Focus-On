import styled from 'styled-components';

export const DetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
  margin-bottom: 2rem;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const DetailHeader = styled.div<{ $color: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const DetailIconContainer = styled.div<{ $color: string }>`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  color: white;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: ${({ $color }) => $color};
    opacity: 0.8;
    z-index: -1;
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
  }
`;

export const AddButton = styled.button<{ $color: string }>`
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  background: ${({ $color }) => $color};
  color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: transform 0.2s, opacity 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const FormCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1.5rem;
  padding: 1.5rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(12px);
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
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  input {
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    outline: none;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
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
  transition: opacity 0.2s;

  ${({ $variant, theme, $color }) => $variant === 'primary' ? `
    background: ${$color || theme.colors.primary};
    color: white;
  ` : `
    background: transparent;
    color: ${theme.colors.textSecondary};
    border: 1px solid ${theme.colors.border};
  `}

  &:hover {
    opacity: 0.8;
  }
`;

export const ProgressCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1.5rem;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  backdrop-filter: blur(12px);
`;

export const ProgressTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

export const ProgressLabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const HistoryContainer = styled.div`
  margin-top: 3rem;
`;

export const HistoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

export const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const HistoryItemBase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  transition: transform 0.2s;

  &:hover {
    transform: translateX(4px);
  }
`;

export const HistoryItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  strong {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const HistoryItemAmount = styled.div<{ $color: string }>`
  font-weight: 700;
  font-size: 1.125rem;
  color: transparent;
  background: ${({ $color }) => $color};
  -webkit-background-clip: text;
`;

import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1.25rem;
  width: 90%;
  max-width: 500px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const ModalHeader = styled.div`
  padding: 1.5rem 1.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.01em;
`;

export const CloseButton = styled.button`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s;
  width: 2.25rem;
  height: 2.25rem;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
    color: ${({ theme }) => theme.colors.text};
    transform: rotate(90deg);
  }
`;

export const ModalBody = styled.div`
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  width: 100%;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }
`;

export const CheckboxGroup = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  line-height: 1.4;
`;

export const Checkbox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  width: 48px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.border};
  border-radius: 24px;
  position: relative;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;
  flex-shrink: 0;

  &:checked {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }

  &:checked::before {
    transform: translateX(24px);
  }
`;

export const ModalFooter = styled.div`
  padding: 1.25rem 1.75rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`;

export const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding: 0.7rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${({ $variant, theme }) => 
    $variant === 'primary' 
      ? `
        background: ${theme.colors.primaryGradient};
        color: white;
        border: none;
        box-shadow: ${theme.shadows.sm};
        &:hover { 
          opacity: 0.9; 
          transform: translateY(-1px);
          box-shadow: ${theme.shadows.md};
        }
      `
      : `
        background: transparent;
        color: ${theme.colors.textSecondary};
        border: 1px solid ${theme.colors.border};
        &:hover { 
          background: ${theme.colors.surfaceHover};
          color: ${theme.colors.text}; 
        }
      `
  }
`;

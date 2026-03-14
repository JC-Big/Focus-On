import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`;

export const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ModalHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ModalBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CheckboxGroup = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
`;

export const Checkbox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  width: 48px;
  height: 24px;
  background-color: rgba(150, 150, 150, 0.3);
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
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  
  ${({ $variant, theme }) => 
    $variant === 'primary' 
      ? `
        background: ${theme.colors.primary};
        color: white;
        border: none;
        &:hover { opacity: 0.9; }
      `
      : `
        background: transparent;
        color: ${theme.colors.text};
        border: 1px solid rgba(255, 255, 255, 0.2);
        &:hover { background: rgba(255, 255, 255, 0.1); }
      `
  }
`;

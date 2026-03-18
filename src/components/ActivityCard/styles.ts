import styled from 'styled-components';

export const CardContainer = styled.div<{ $color: string }>`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};

  /* Subtle gradient glow behind the card */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    background: ${({ $color }) => $color};
    opacity: 0.04;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    filter: blur(60px);
    z-index: 0;
    pointer-events: none;
    transition: opacity 0.4s;
  }

  &:hover {
    transform: translateY(-6px) scale(1.015);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: rgba(255, 255, 255, 0.12);
    
    &::before {
      opacity: 0.12;
    }
  }

  &:active {
    transform: translateY(-2px) scale(1.005);
  }

  > * {
    z-index: 1;
    position: relative;
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.25rem 1.5rem 0 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem 1.25rem 0 1.25rem;
  }
`;

export const IconContainer = styled.div<{ $color: string }>`
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 0.875rem;
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
    opacity: 0.9;
    z-index: -1;
  }
  
  box-shadow: 0 4px 16px -2px ${({ $color }) => $color}40;
`;

export const StreakBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.65rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.surfaceHover};
  color: ${({ theme }) => theme.colors.warning};
  border: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: blur(8px);
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

export const ActivityTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 1.25rem 1.5rem 0 1.5rem;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    margin: 1rem 1.25rem 0 1.25rem;
  }
`;

export const ProgressInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.825rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 1.5rem 0.5rem 1.5rem;

  @media (max-width: 768px) {
    margin: 0.875rem 1.25rem 0.375rem 1.25rem;
  }

  span:last-child {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 500;
  }
`;

export const ProgressBarContainer = styled.div`
  margin: 0 1.5rem;
  width: calc(100% - 3rem);
  height: 0.3rem;
  border-radius: 9999px;
  background: ${({ theme }) => theme.colors.border};
  overflow: hidden;

  @media (max-width: 768px) {
    margin: 0 1.25rem;
    width: calc(100% - 2.5rem);
  }
`;

export const ProgressBarFill = styled.div<{ $percentage: number; $color: string }>`
  height: 100%;
  width: ${({ $percentage }) => $percentage}%;
  background: ${({ $color }) => $color};
  border-radius: 9999px;
  transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.825rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
  padding: 1.25rem 1.5rem 1.5rem 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem 1.25rem 1.25rem 1.25rem;
  }
`;

import styled from 'styled-components';

export const CardContainer = styled.div<{ $color: string }>`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1.5rem; // rounded-3xl
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};

  // Subtle gradient glow behind the card
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    background: ${({ $color }) => $color};
    opacity: 0.05;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    filter: blur(60px);
    z-index: 0;
    pointer-events: none;
    transition: opacity 0.4s;
  }

  &:hover {
    transform: translateY(-4px) scale(1.01);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: rgba(255, 255, 255, 0.15);
    
    &::before {
      opacity: 0.12;
    }
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
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem 1.75rem 0 1.75rem;

  @media (max-width: 768px) {
    padding: 1.25rem 1.25rem 0 1.25rem;
  }
`;

export const IconContainer = styled.div<{ $color: string }>`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem; // rounded-2xl
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
  
  // Icon specific subtle shadow
  box-shadow: 0 4px 20px -2px ${({ $color }) => $color}40;
`;

export const StreakBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.35rem 0.75rem;
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
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 1.5rem 1.75rem 0 1.75rem;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin: 1.25rem 1.25rem 0 1.25rem;
  }
`;

export const ProgressInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 1.25rem 1.75rem 0.75rem 1.75rem;

  @media (max-width: 768px) {
    margin: 1rem 1.25rem 0.5rem 1.25rem;
  }

  span:last-child {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 500;
  }
`;

export const ProgressBarContainer = styled.div`
  margin: 0 1.75rem;
  width: calc(100% - 3.5rem);
  height: 0.35rem;     // thinner
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
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
  padding: 1.5rem 1.75rem 1.75rem 1.75rem;

  @media (max-width: 768px) {
    padding: 1.25rem 1.25rem 1.25rem 1.25rem;
  }
`;

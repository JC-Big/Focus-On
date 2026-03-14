import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primaryGradient};
  color: white;
  box-shadow: ${({ theme }) => theme.shadows.md};
  position: relative; /* For absolutely centering the center section on mobile if needed */
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CenterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const AppTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;

  svg {
    color: white;
  }
`;

export const DateText = styled.div`
  font-size: 0.875rem;
  opacity: 0.9;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.25rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Badge = styled.div<{ $type?: 'points' | 'streak' }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 9999px; // full
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  font-weight: 600;
  font-size: 0.875rem;
  cursor: default;

  svg {
    color: ${({ $type }) => ($type === 'points' ? '#fbbf24' : $type === 'streak' ? '#f87171' : 'white')};
  }
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all 0.2s;

  svg {
    stroke: currentColor;
    color: currentColor;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
    transform: scale(1.05);
  }
`;

export const SettingsWrapper = styled.div`
  position: relative;
`;

export const SettingsDropdown = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  width: 220px;
  background: ${({ theme }) => theme.colors.surface};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  z-index: 50;
`;

export const SettingsMenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    stroke: currentColor;
  }
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
`;

export const LevelAvatarWrapper = styled.div`
  position: relative;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SvgCircle = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg); /* Start from top */
  pointer-events: none;

  circle {
    fill: none;
    stroke-width: 3;
    stroke-linecap: round;
  }

  .bg {
    stroke: rgba(255, 255, 255, 0.2);
  }

  .fg {
    stroke: #fbbf24; /* Golden yellow progress */
    transition: stroke-dashoffset 0.5s ease;
  }
`;

export const AvatarCircle = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background: white;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  z-index: 1;
`;

export const LevelBadge = styled.div`
  position: absolute;
  top: -6px;
  background: #fbbf24;
  color: #fff;
  border-radius: 9999px;
  font-size: 0.65rem;
  font-weight: 800;
  padding: 0.1rem 0.4rem;
  display: flex;
  align-items: center;
  gap: 0.15rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 2;

  svg {
    width: 10px;
    height: 10px;
    fill: currentColor;
  }
`;

export const UserName = styled.span`
  font-weight: 500;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: white;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 100;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 999;
  display: flex;
  justify-content: flex-start;
`;

export const MobileMenuContent = styled.div`
  width: 80%;
  max-width: 320px;
  height: 100%;
  background: ${({ theme }) => theme.colors.primaryGradient};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  display: flex;
  flex-direction: column;
  animation: slideIn 0.3s ease-out;
  
  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

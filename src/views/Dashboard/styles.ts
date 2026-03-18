import styled from 'styled-components';

export const DashboardContainer = styled.main`
  padding: 2rem 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1.25rem 1rem;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.75rem;
  
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 1.25rem;
  }
`;

export const SectionHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;

export const ViewAllLink = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const ArrowButton = styled.button<{ $direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $direction }) => ($direction === 'left' ? 'left: 0.5rem;' : 'right: 0.5rem;')}
  z-index: 10;
  background: ${({ theme }) => theme.colors.surface};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    transform: translateY(-50%) scale(1.08);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    background: ${({ theme }) => theme.colors.surfaceHover};
  }

  svg {
    stroke: ${({ theme }) => theme.colors.text};
    stroke-width: 2.5;
    width: 20px;
    height: 20px;
    ${({ $direction }) => ($direction === 'left' ? 'margin-right: 2px;' : 'margin-left: 2px;')}
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  padding-bottom: 1rem; 
  width: 100%;
  overflow: hidden;
`;

export const CardWrapper = styled.div`
  flex: 1;
  min-width: 0;
  
  @media (max-width: 1024px) {
    flex: 0 0 calc(50% - 0.75rem);
  }

  @media (max-width: 640px) {
    flex: 0 0 100%;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TabContentContainer = styled.div`
  margin-top: 1rem;
`;

import styled from 'styled-components';

export const DashboardContainer = styled.main`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

export const SectionHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    text-align: center;
  }
`;

export const ViewAllLink = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
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
  background: rgba(0, 0, 0, 0.4); // Semi-transparent dark background
  border-radius: 50%; // Circular
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.3s ease;
  border: none;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  &:hover {
    transform: translateY(-50%) scale(1.05);
    background: rgba(0, 0, 0, 0.6);
  }

  svg {
    /* Set stroke to white to match reference image */
    stroke: #ffffff; 
    stroke-width: 2.5; /* Thicker chevron stroke */
    width: 24px;
    height: 24px;
    ${({ $direction }) => ($direction === 'left' ? 'margin-right: 2px;' : 'margin-left: 2px;')}
  }

  @media (max-width: 768px) {
    display: none; // Hidden on mobile
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  padding-bottom: 1rem; 
  width: 100%;
  overflow: hidden; // Prevent native scrolling, handle it logically via React State
`;

export const CardWrapper = styled.div`
  flex: 1; /* Stretch 3 cards evenly */
  min-width: 0; /* Allows shrinking in flex */
  
  @media (max-width: 1024px) {
    flex: 0 0 calc(50% - 0.75rem); /* 2 cards visible */
  }

  @media (max-width: 640px) {
    flex: 0 0 100%; /* 1 card on mobile */
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

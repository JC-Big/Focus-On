import { useState, useEffect } from 'react';
import type { Activity, TabType } from '../../types';
import { ActivityCard } from '../../components/ActivityCard';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import { Tabs } from '../../components/Tabs';
import { 
  DashboardContainer, 
  HeaderContainer,
  SectionHeader, 
  ViewAllLink,
  CarouselWrapper, 
  CarouselContainer, 
  CardWrapper, 
  ArrowButton,
  GridContainer,
  TabContentContainer 
} from './styles';

interface DashboardProps {
  activities: Activity[];
  onActivitySelect: (id: string) => void;
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  TabContent: React.ReactNode;
}

export const Dashboard = ({
  activities,
  onActivitySelect,
  activeTab,
  onTabChange,
  TabContent
}: DashboardProps) => {
  const [startIndex, setStartIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(3);
  
  // Touch Handlers for Mobile Swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Responsive items logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) setItemsToShow(2);
      else if (window.innerWidth <= 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % activities.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + activities.length) % activities.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // Reset end position
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Create infinite loop slice
  const getVisibleActivities = () => {
    const visible: Activity[] = [];
    for (let i = 0; i < itemsToShow; i++) {
      visible.push(activities[(startIndex + i) % activities.length]);
    }
    return visible;
  };

  if (showAll) {
    return (
      <DashboardContainer>
        <HeaderContainer>
          <SectionHeader>Todas as Categorias</SectionHeader>
          <ViewAllLink onClick={() => setShowAll(false)} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <X size={16} /> Fechar
          </ViewAllLink>
        </HeaderContainer>

        <GridContainer>
          {activities.map(activity => (
            <ActivityCard
              key={'grid-' + activity.id}
              activity={activity}
              onClick={() => onActivitySelect(activity.id)}
            />
          ))}
        </GridContainer>
      </DashboardContainer>
    );
  }

  return (
    <DashboardContainer>
      <HeaderContainer>
        <SectionHeader>Escolha a Categoria que Deseja</SectionHeader>
        <ViewAllLink onClick={() => setShowAll(true)}>Ver Mais...</ViewAllLink>
      </HeaderContainer>
      
      <CarouselWrapper>
        <ArrowButton onClick={handlePrev} $direction="left" aria-label="Previous categories">
          <ChevronLeft size={24} />
        </ArrowButton>
        
        <CarouselContainer 
          onTouchStart={onTouchStart} 
          onTouchMove={onTouchMove} 
          onTouchEnd={onTouchEndHandler}
        >
          {getVisibleActivities().map((activity, idx) => (
            <CardWrapper key={`carousel-${activity.id}-${idx}`}>
              <ActivityCard
                activity={activity}
                onClick={() => onActivitySelect(activity.id)}
              />
            </CardWrapper>
          ))}
        </CarouselContainer>

        <ArrowButton onClick={handleNext} $direction="right" aria-label="Next categories">
          <ChevronRight size={24} />
        </ArrowButton>
      </CarouselWrapper>
      
      <Tabs activeTab={activeTab} onTabChange={onTabChange} />

      <TabContentContainer>
        {TabContent}
      </TabContentContainer>
    </DashboardContainer>
  );
};

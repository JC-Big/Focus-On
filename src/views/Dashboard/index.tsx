import type { Activity, TabType } from '../../types';
import { ActivityCard } from '../../components/ActivityCard';

import { Tabs } from '../../components/Tabs';
import { DashboardContainer, Grid, TabContentContainer } from './styles';

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
  return (
    <DashboardContainer>
      <Grid>
        {activities.map(activity => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            onClick={() => onActivitySelect(activity.id)}
          />
        ))}
      </Grid>
      
      <Tabs activeTab={activeTab} onTabChange={onTabChange} />

      <TabContentContainer>
        {TabContent}
      </TabContentContainer>
    </DashboardContainer>
  );
};

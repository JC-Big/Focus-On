import type { TabType } from '../../types';
import { TabsContainer, TabButton } from './styles';

interface TabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const tabs: TabType[] = ['Social', 'Prêmios', 'Diário'];

export const Tabs = ({ activeTab, onTabChange }: TabsProps) => {
  return (
    <TabsContainer className="glass">
      {tabs.map((tab) => (
        <TabButton
          key={tab}
          $isActive={activeTab === tab}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </TabButton>
      ))}
    </TabsContainer>
  );
};

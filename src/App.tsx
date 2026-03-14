import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/theme';
import { useStore } from './store/useStore';

// Components
import { OnboardingView } from './views/OnboardingView';
import { AuthView } from './views/AuthView';
import { Header } from './components/Header';
import { Dashboard } from './views/Dashboard';
import { ActivityDetailView } from './views/ActivityDetailView';
import { SocialView } from './views/SocialView';
import { RewardsView } from './views/RewardsView';
import { DiaryView } from './views/DiaryView';

function App() {
  const {
    isAuthenticated,
    isDark,
    activeTab,
    selectedActivityId,
    activities,
    history,
    login,
    toggleTheme,
    setActiveTab,
    setSelectedActivityId,
    addProgress,
    hasSeenOnboarding,
    completeOnboarding
  } = useStore();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const selectedActivity = activities.find(a => a.id === selectedActivityId);
  const selectedHistory = selectedActivityId ? (history[selectedActivityId] || []) : [];

  const getTabContent = () => {
    switch (activeTab) {
      case 'Social': return <SocialView />;
      case 'Prêmios': return <RewardsView />;
      case 'Diário': return <DiaryView />;
      default: return null;
    }
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className="app-container">
        {!isAuthenticated ? (
          hasSeenOnboarding ? (
            <AuthView onLogin={login} isDark={isDark} toggleTheme={toggleTheme} />
          ) : (
            <OnboardingView onComplete={completeOnboarding} isDark={isDark} toggleTheme={toggleTheme} />
          )
        ) : (
          <>
            <Header isDark={isDark} toggleTheme={toggleTheme} />
            
            {selectedActivity ? (
              <ActivityDetailView
                activity={selectedActivity}
                history={selectedHistory}
                onBack={() => setSelectedActivityId(null)}
                onAddProgress={(amount, description) => addProgress(selectedActivity.id, amount, description)}
              />
            ) : (
              <Dashboard
                activities={activities}
                onActivitySelect={setSelectedActivityId}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                TabContent={getTabContent()}
              />
            )}
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;

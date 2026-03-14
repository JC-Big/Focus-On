import { Edit2, Coins, Shield, Flame, Star, Trophy } from 'lucide-react';
import { useStore } from '../../store/useStore';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem 6rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  gap: 2rem;
  width: 100%;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
  }
`;

const CloseIconButton = styled.button`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid rgba(255,255,255,0.05);
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex; align-items: center; justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.colors.text};
  }
`;

// -- Identity Section
const IdentitySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 120px; height: 120px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.primary};
  display: flex; align-items: center; justify-content: center;
  background: rgba(255,255,255,0.1);
  font-size: 3rem; color: white;
  
  img {
    width: 100%; height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const EditBadge = styled.button`
  position: absolute;
  bottom: 0px; right: -10px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 12px;
  padding: 0.35rem 0.75rem;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  transition: all 0.2s;
  &:hover { 
    transform: scale(1.05); 
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NameWrapper = styled.div`
  display: flex; align-items: center; gap: 0.75rem;
  h2 {
    margin: 0; font-size: 1.75rem; color: ${({ theme }) => theme.colors.text};
  }
  button {
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 12px;
    padding: 0.35rem 0.75rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: pointer;
    display: flex; align-items: center;
    transition: all 0.2s;
    &:hover { color: ${({ theme }) => theme.colors.primary}; transform: scale(1.05); }
  }
`;

// -- Stats Grid (Yellow Area)
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`;

const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex; flex-direction: column; align-items: center;
  gap: 0.5rem; text-align: center;
  
  .val {
    font-size: 1.5rem; font-weight: 700; color: ${({ theme }) => theme.colors.text};
  }
  .label {
    font-size: 0.85rem; color: ${({ theme }) => theme.colors.textSecondary};
  }
  svg { color: ${({ theme }) => theme.colors.warning}; }
`;

// -- Achievements Mural (Green Area)
const SectionContainer = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex; flex-direction: column; gap: 1rem;
`;

const SectionTitle = styled.h3`
  margin: 0; font-size: 1.25rem; color: ${({ theme }) => theme.colors.text};
  display: flex; align-items: center; gap: 0.5rem;
`;

const MuralGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 1rem;
`;

const AchievementSlot = styled.div<{ $locked?: boolean }>`
  aspect-ratio: 1;
  border-radius: 16px;
  background: ${({ $locked }) => $locked ? 'rgba(255,255,255,0.05)' : 'rgba(74, 222, 128, 0.1)' };
  display: flex; align-items: center; justify-content: center;
  border: 1px solid ${({ $locked }) => $locked ? 'transparent' : 'rgba(74, 222, 128, 0.3)' };
  color: ${({ $locked, theme }) => $locked ? theme.colors.textSecondary : theme.colors.success};
  opacity: ${({ $locked }) => $locked ? 0.5 : 1};
`;

// -- Level Progress (Blue Area)
const LevelCard = styled.div`
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 16px; padding: 1.5rem;
  display: flex; flex-direction: column; gap: 1rem;
`;

const LevelTopRow = styled.div`
  display: flex; justify-content: space-between; align-items: flex-end;
  .level-text {
    font-size: 2rem; font-weight: 800; color: ${({ theme }) => theme.colors.primary};
    line-height: 1; margin: 0;
  }
  .xp-text {
    font-size: 0.9rem; color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%; height: 12px; background: rgba(0,0,0,0.3); border-radius: 6px; overflow: hidden;
`;

const ProgressBarFill = styled.div<{ $percent: number }>`
  height: 100%;
  width: ${({ $percent }) => $percent}%;
  background: ${({ theme }) => theme.colors.primaryGradient};
  transition: width 0.5s ease-out;
`;

const RewardInfo = styled.div`
  display: flex; align-items: center; gap: 0.5rem; justify-content: center;
  font-size: 0.9rem; color: ${({ theme }) => theme.colors.text};
  background: rgba(0,0,0,0.2); padding: 0.5rem; border-radius: 8px;
`;

// -- My Goals (Pink Area)
const GoalsList = styled.div`
  display: flex; flex-direction: column; gap: 0.75rem;
`;

const GoalItem = styled.div`
  background: rgba(0,0,0,0.2);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 12px; padding: 1rem;
  display: flex; justify-content: space-between; align-items: center;
`;

const GoalInfo = styled.div`
  display: flex; flex-direction: column; gap: 0.25rem;
  .title { font-weight: 600; color: ${({ theme }) => theme.colors.text}; }
  .category { font-size: 0.8rem; color: ${({ theme }) => theme.colors.textSecondary}; }
`;

const GoalStreak = styled.div`
  display: flex; align-items: center; gap: 0.5rem;
  color: ${({ theme }) => theme.colors.danger};
  font-weight: 700;
  background: rgba(239, 68, 68, 0.1);
  padding: 0.5rem 0.75rem; border-radius: 8px;
`;

export const ProfileView = () => {
  const { userProfile, setProfileOpen, activities, history } = useStore();

  const nextLevelXp = userProfile.level * 1000;
  const xpPercent = Math.min((userProfile.xp / nextLevelXp) * 100, 100);

  // Calculate global streak overall
  const activeStreak = activities.reduce((max, act) => Math.max(max, act.streak), 0);
  
  // Fake empty achievement slots (e.g. 8 total)
  const totalAchievements = 8;
  const earnedAchievements = userProfile.achievements?.length || 0;

  // Filter started activities
  const startedActivities = activities.filter(act => {
    // Check if it has any history records or any active streak/progress
    const hasHistory = history[act.id] && history[act.id].length > 0;
    return hasHistory || act.current > 0 || act.streak > 0;
  });

  return (
    <ProfileContainer>
      <HeaderRow>
        <h1>Perfil do Usuário</h1>
        <CloseIconButton onClick={() => setProfileOpen(false)}>
            VOLTAR
        </CloseIconButton>
      </HeaderRow>
        
        {/* 1. Identidade (Avatar e Nome) */}
        <IdentitySection>
          <AvatarWrapper>
            {userProfile.avatarUrl ? (
              <img src={userProfile.avatarUrl} alt="Avatar" />
            ) : "JS"}
            <EditBadge onClick={() => alert("Editar foto em breve!")}>
              <Edit2 size={16} />
            </EditBadge>
          </AvatarWrapper>
          <NameWrapper>
            <h2>{userProfile.name || "Joana Silva"}</h2>
            <button onClick={() => alert("Editar nome em breve!")}>
              <Edit2 size={16} />
            </button>
          </NameWrapper>
        </IdentitySection>

        {/* 2. Estatísticas Rápidas (Yellow) */}
        <StatsGrid>
          <StatCard>
            <Coins size={28} />
            <span className="val">{userProfile.coins}</span>
            <span className="label">Coins Adquiridos</span>
          </StatCard>
          <StatCard>
            <Shield size={28} />
            <span className="val">{userProfile.plan || "Free"}</span>
            <span className="label">Insígnia de Plano</span>
          </StatCard>
          <StatCard>
            <Flame size={28} />
            <span className="val">{activeStreak}</span>
            <span className="label">Dias Consecutivos</span>
          </StatCard>
        </StatsGrid>

        {/* 3. Mural de Conquistas (Green) */}
        <SectionContainer>
          <SectionTitle>
             <Trophy size={20} color="#4ade80" /> 
             Mural de Conquistas
          </SectionTitle>
          <MuralGrid>
            {/* Render achieved slots if any existed, otherwise render lock templates */}
            {Array.from({ length: totalAchievements }).map((_, i) => (
              <AchievementSlot key={i} $locked={i >= earnedAchievements}>
                <Trophy size={32} />
              </AchievementSlot>
            ))}
          </MuralGrid>
        </SectionContainer>

        {/* 4. Progresso de Nível (Blue) */}
        <LevelCard>
          <LevelTopRow>
            <div>
              <span className="label" style={{display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)'}}>Nível do Perfil</span>
              <p className="level-text">{userProfile.level}</p>
            </div>
            <span className="xp-text">{userProfile.xp} / {nextLevelXp} XP</span>
          </LevelTopRow>
          <ProgressBarContainer>
            <ProgressBarFill $percent={xpPercent} />
          </ProgressBarContainer>
          <RewardInfo>
            <Coins size={16} color="#fbbf24" />
            <span>Recompensa Próximo Nível: <strong>+100 Coins</strong></span>
          </RewardInfo>
        </LevelCard>

        {/* 5. Minhas Metas (Pink) */}
        <SectionContainer>
          <SectionTitle>
             <Star size={20} color="#ec4899" /> 
             Minhas Metas
          </SectionTitle>
          <GoalsList>
            {startedActivities.length > 0 ? startedActivities.map(act => (
              <GoalItem key={act.id}>
                <GoalInfo>
                  <span className="title">{act.title}</span>
                </GoalInfo>
                <GoalStreak>
                  <Flame size={16} />
                  <span>{act.streak} dias</span>
                </GoalStreak>
              </GoalItem>
            )) : (
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textAlign: 'center', padding: '1rem 0' }}>
                Ainda não possui metas iniciadas.
              </p>
            )}
          </GoalsList>
        </SectionContainer>

      </ProfileContainer>
  );
};

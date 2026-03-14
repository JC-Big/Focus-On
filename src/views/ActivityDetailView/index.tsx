import { useState } from 'react';
import { ArrowLeft, Plus, Flame, Dumbbell, Droplets, Brain, BookOpen } from 'lucide-react';
import type { Activity, ActivityHistory } from '../../types';
import { StreakBadge, ProgressBarContainer, ProgressBarFill } from '../../components/ActivityCard/styles';
import {
  DetailContainer,
  BackButton,
  DetailHeader,
  HeaderContent,
  DetailIconContainer,
  HeaderTitle,
  AddButton,
  FormCard,
  FormGroup,
  InputWrapper,
  FormActions,
  ActionButton,
  ProgressCard,
  ProgressTitle,
  ProgressLabelRow,
  HistoryContainer,
  HistoryTitle,
  HistoryList,
  HistoryItemBase,
  HistoryItemInfo,
  HistoryItemAmount
} from './styles';

const iconMap: Record<string, React.ElementType> = {
  Dumbbell,
  Droplets,
  Brain,
  BookOpen
};

interface ActivityDetailViewProps {
  activity: Activity;
  history: ActivityHistory[];
  onBack: () => void;
  onAddProgress: (amount: number, description: string) => void;
}

export const ActivityDetailView = ({
  activity,
  history,
  onBack,
  onAddProgress
}: ActivityDetailViewProps) => {
  const [showForm, setShowForm] = useState(false);
  const [amount, setAmount] = useState<number | ''>('');
  const [description, setDescription] = useState('');

  const IconComponent = iconMap[activity.icon] || Dumbbell;
  const percentage = Math.min(100, Math.round((activity.current / activity.total) * 100));
  const missing = Math.max(0, activity.total - activity.current);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof amount === 'number' && amount > 0) {
      onAddProgress(amount, description || 'Registro de atividade');
      setAmount('');
      setDescription('');
      setShowForm(false);
    }
  };

  return (
    <DetailContainer>
      <BackButton onClick={onBack}>
        <ArrowLeft size={20} />
        Voltar para o Painel
      </BackButton>

      <DetailHeader $color={activity.color}>
        <HeaderContent>
          <DetailIconContainer $color={activity.color}>
            <IconComponent size={32} />
          </DetailIconContainer>
          <HeaderTitle>
            <h1>{activity.title}</h1>
            {activity.streak > 0 && (
              <StreakBadge>
                <Flame size={14} />
                <span>{activity.streak} dias consecutivos</span>
              </StreakBadge>
            )}
          </HeaderTitle>
        </HeaderContent>

        {!showForm && (
          <AddButton $color={activity.color} onClick={() => setShowForm(true)}>
            <Plus size={20} />
            Adicionar
          </AddButton>
        )}
      </DetailHeader>

      {showForm && (
        <FormCard>
          <FormGroup onSubmit={handleSubmit}>
            <InputWrapper>
              <label>Descrição</label>
              <input
                type="text"
                placeholder="Ex: Treino de pernas"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </InputWrapper>
            <InputWrapper>
              <label>Quantidade ({activity.unit})</label>
              <input
                type="number"
                min="1"
                placeholder="0"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                required
              />
            </InputWrapper>
            <FormActions>
              <ActionButton $variant="secondary" type="button" onClick={() => setShowForm(false)}>
                Cancelar
              </ActionButton>
              <ActionButton $variant="primary" $color={activity.color} type="submit">
                Salvar
              </ActionButton>
            </FormActions>
          </FormGroup>
        </FormCard>
      )}

      <ProgressCard>
        <ProgressTitle>Progresso Diário</ProgressTitle>
        <ProgressLabelRow>
          <span>{activity.current} {activity.unit} alcançados</span>
          <span style={{ color: 'var(--color-textSecondary)' }}>
            Faltam {missing} {activity.unit}
          </span>
        </ProgressLabelRow>
        <ProgressBarContainer style={{ height: '1rem' }}>
          <ProgressBarFill $percentage={percentage} $color={activity.color} />
        </ProgressBarContainer>
      </ProgressCard>

      <HistoryContainer>
        <HistoryTitle>Histórico do Mês</HistoryTitle>
        <HistoryList>
          {history.length > 0 ? (
            history.map((item) => (
              <HistoryItemBase key={item.id}>
                <HistoryItemInfo>
                  <strong>{item.description}</strong>
                  <span>{new Date(item.date).toLocaleDateString('pt-BR', {
                    day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
                  })}</span>
                </HistoryItemInfo>
                <HistoryItemAmount $color={activity.color}>
                  +{item.amount} {activity.unit}
                </HistoryItemAmount>
              </HistoryItemBase>
            ))
          ) : (
            <p style={{ color: 'gray' }}>Nenhum registro ainda hoje.</p>
          )}
        </HistoryList>
      </HistoryContainer>
    </DetailContainer>
  );
};

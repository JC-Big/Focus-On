import { X, Save } from 'lucide-react';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  CheckboxGroup,
  Checkbox,
  ModalFooter,
  Button
} from '../UserConfigModal/styles';
import { useState } from 'react';

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationsModal = ({ isOpen, onClose }: NotificationsModalProps) => {
  const [wantsNotifications, setWantsNotifications] = useState(true);

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e: React.MouseEvent) => e.stopPropagation()} style={{ maxWidth: '400px' }}>
        <ModalHeader>
          <ModalTitle>Notificações</ModalTitle>
          <CloseButton onClick={onClose}>
            <X size={24} />
          </CloseButton>
        </ModalHeader>
        <ModalBody>
          <CheckboxGroup>
            <Checkbox 
              type="checkbox" 
              checked={wantsNotifications}
              onChange={(e) => setWantsNotifications(e.target.checked)}
            />
            Desejo Receber notificações e lembretes de minhas tarefas.
          </CheckboxGroup>
        </ModalBody>
        <ModalFooter>
          <Button $variant="secondary" onClick={onClose}>Cancelar</Button>
          <Button $variant="primary" onClick={() => {
            alert('Preferências de notificação salvas!');
            onClose();
          }}>
            <Save size={18} />
            Salvar
          </Button>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};

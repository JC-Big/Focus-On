import { X, Save } from 'lucide-react';
import React from 'react';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  FormGroup,
  Label,
  Input,
  ModalFooter,
  Button
} from './styles';

interface UserConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserConfigModal = ({ isOpen, onClose }: UserConfigModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Configurações de Conta</ModalTitle>
          <CloseButton onClick={onClose}>
            <X size={24} />
          </CloseButton>
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>E-mail</Label>
            <Input type="email" placeholder="seu@email.com" defaultValue="joao.silva@email.com" />
          </FormGroup>
          <FormGroup>
            <Label>Senha</Label>
            <Input type="password" placeholder="••••••••" defaultValue="12345678" />
          </FormGroup>
          <FormGroup>
            <Label>Forma de Pagamento Cadastrada</Label>
            <Input type="text" placeholder="Número do Cartão" defaultValue="**** **** **** 1234" />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button $variant="secondary" onClick={onClose}>Cancelar</Button>
          <Button $variant="primary" onClick={() => {
            alert('Configurações salvas!');
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

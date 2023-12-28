// import * as Dialog from '@radix-ui/react-dialog';
// import { IoMdClose } from 'react-icons/io';
import { Suspense, ForwardedRef, ReactElement } from 'react';
import './index.css';

interface ModalProps {
  // onChange: (open: boolean) => void;
  title: string;
  // description: string;
  // children: React.ReactNode;
  children: ReactElement | ReactElement[];
}

// const Modal: React.FC<ModalProps> = ({ isOpen, onChange, title, description, children }) => {
//   return <></>;
// };
// isOpen, onChange, title, description,
export default function Modal({ children, title }: ModalProps) {
  return (
    <div className={`modal-wrap ${title}`}>
      <Suspense fallback={<div>로딩중</div>}>{children}</Suspense>
    </div>
  );
}

interface ModalBackGroundProps {
  children: ReactElement | ReactElement[];
  isOpen: boolean;
}
const ModalBackGround = ({ children, isOpen }: ModalBackGroundProps) => {
  return isOpen && <div className="modal-back flex-center">{children}</div>;
};
Modal.ModalBackGround = ModalBackGround;

interface ModalButtonProps {
  children: ReactElement | ReactElement[];
  openModal: () => void;
}
const ModalButton = ({ children, openModal }: ModalButtonProps) => {
  return (
    <button className="modal-button" onClick={openModal}>
      {children}
    </button>
  );
};
Modal.ModalButton = ModalButton;

// * 모달창 콘텐츠
interface ModalContentProps {
  children: ReactElement | ReactElement[];
}
const ModalContent = ({ children }: ModalContentProps) => {
  return <div className="modal-cont">{children}</div>;
};
Modal.ModalContent = ModalContent;

// * 모달창 닫기 버튼
interface CloseButtonProps {
  clickClose: () => void;
}
const CloseButton = ({ clickClose }: CloseButtonProps) => {
  return (
    <button className="close-button" onClick={clickClose}>
      닫기
    </button>
  );
};
Modal.CloseButton = CloseButton;

// * 모달창 하단 버튼
interface BottomButtonProps {
  children: ReactElement | ReactElement[];
  className?: string;
  gap?: number;
}
const BottomButton = ({ children, gap, className }: BottomButtonProps) => {
  return (
    <div className={`flex-center ${className}`} style={{ gap: gap ? gap + 'rem' : '3rem' }}>
      {children}
    </div>
  );
};
Modal.BottomButton = BottomButton;

// * 모달창 하단 버튼 children
interface BottomButtonConrimProps {
  clickConfirm: () => void;
  className?: string;
  children?: ReactElement | ReactElement[];
}
const BottomButtonConfirm = ({ clickConfirm, className, children }: BottomButtonConrimProps) => {
  return (
    <button className={className} onClick={clickConfirm}>
      {children ? children : 'ok'}
    </button>
  );
};
Modal.BottomButtonConfirm = BottomButtonConfirm;

interface BottomButtonDullProps {
  clickDull: () => void;
  className?: string;
  children?: ReactElement | ReactElement[];
}
const BottomButtonDull = ({ clickDull, className, children }: BottomButtonDullProps) => {
  return (
    <button className={className} onClick={clickDull}>
      {children ? children : 'no'}
    </button>
  );
};
Modal.BottomButtonDull = BottomButtonDull;

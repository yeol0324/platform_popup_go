'use client';
import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'default' | 'large';
  isBorder?: boolean;
  children: React.ReactNode;
}
const RoundButton = ({ size = 'default', isBorder, children, ...props }: Props) => {
  return (
    <button {...props}>
      <div className={styles.button_red}>hh</div>
      {children}
    </button>
  );
};
export default RoundButton;

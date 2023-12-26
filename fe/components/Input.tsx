'use client';
import { ForwardedRef, forwardRef, HTMLAttributes, InputHTMLAttributes, ReactElement, ReactNode } from 'react';
export const { Label, TextField } = Input;
interface InputProps extends HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  children: React.ReactNode;
  bottomText?: string;
}
export default function Input({ label, children, bottomText, ...props }: InputProps) {
  return (
    <div {...props}>
      {children}
      {bottomText != null ? <p>{bottomText}</p> : null}
    </div>
  );
}

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  error?: boolean;
}
Input.TextField = forwardRef(({ error, ...props }: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
  return <input ref={ref} {...props} />;
});
interface LabelProps extends Omit<HTMLAttributes<HTMLLabelElement>, 'size'> {
  error?: boolean;
  children: ReactElement;
}
Input.Label = forwardRef(({ children }: LabelProps, ref: ForwardedRef<HTMLLabelElement>) => {
  return <label ref={ref}>{children}</label>;
});
Input.TextField.displayName = 'InputTextField';
Input.Label.displayName = 'InputLabel';

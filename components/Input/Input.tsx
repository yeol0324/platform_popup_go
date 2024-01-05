import { ForwardedRef, HTMLAttributes, InputHTMLAttributes, ReactElement } from 'react';

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Input({ children, ...props }: InputProps) {
  return <div {...props}>{children}</div>;
}

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  error?: boolean;
}
const InputTextField = ({ error, ...props }: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <input
      style={{
        width: '100%',
        padding: '8px 4px',
        border: '1px solid #ddd',
        borderRadius: '8px',
      }}
      ref={ref}
      {...props}
    />
  );
};
Input.TextField = InputTextField;

interface LabelProps extends Omit<InputHTMLAttributes<HTMLLabelElement>, 'size'> {
  children: React.ReactNode;
}
const InputLabel = ({ children, ...props }: LabelProps) => {
  return <label {...props}>{children}</label>;
};
Input.Label = InputLabel;

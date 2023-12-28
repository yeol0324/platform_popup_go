import {
  Children,
  cloneElement,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
} from 'react';
interface InputProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  children: ReactElement;
  bottomText?: string;
}

export function Input({ label, children, bottomText, ...props }: InputProps) {
  const child = Children.only(children);
  const isError: boolean = child.props.error ?? false;

  return (
    <div css={{ width: '100%' }} {...props}>
      <label
        css={{
          display: 'inline-block',
          padding: '5px 0',
          fontSize: '15px',
          fontWeight: '500',
          lineHeight: 1.6,
        }}
      >
        {label}
      </label>
      {cloneElement(child, {
        ...child.props,
      })}
      {bottomText != null ? (
        <p
          css={{
            marginTop: '4px',
            display: 'inline-block',
            fontWeight: 400,
            fontSize: '15px',
          }}
        >
          {bottomText}
        </p>
      ) : null}
    </div>
  );
}

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  error?: boolean;
}

const InputTextField = ({ error, ...props }: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <input
      css={{
        width: '100%',
        padding: '0 18px',
        fontSize: '15px',
        lineHeight: '48px',
        margin: 0,
        outline: 'none',
        border: 'none',
        borderRadius: '8px',
        transition: `background .2s ease,color .1s ease, box-shadow .2s ease`,
      }}
      ref={ref}
      {...props}
    />
  );
};
Input.TextField = InputTextField;

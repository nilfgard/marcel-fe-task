import { StyledInput } from './Input.styles';
import { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: FC<InputProps> = ({ label, ...props }) => {
  return (
    <>
      <label>
        <>
          {label}
          <StyledInput type='text' {...props} />
        </>
      </label>
    </>
  );
};

export default Input;

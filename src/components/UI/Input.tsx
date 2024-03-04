import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // Additional props specific to Input component can be defined here
  label?: string;
  hasError?: boolean;
  errorMessage?: string;
}

const Input = ({ label, hasError, errorMessage, ...rest }: InputProps) => {
  return (
    <div className="relative w-full md:w-3/5">
      {label && (
        <label className="" htmlFor={rest.name}>
          {label}
        </label>
      )}
      <input
        className={`px-5 py-2 w-full outline-none rounded ${
          hasError ? 'border-red-500 border-2' : 'border-none'
        }`}
        {...rest}
      />
      {hasError && <p className="absolute -bottom-10">{errorMessage}</p>}
    </div>
  );
};

export default Input;

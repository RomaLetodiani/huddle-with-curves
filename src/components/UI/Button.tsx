import { twMerge } from 'tailwind-merge';

type Props = {
  text?: string;
  className?: string;
};

const Button = (props: Props) => {
  return (
    <button
      className={twMerge(
        'cursor-pointer py-2 sm:py-4 px-5 sm:px-12 rounded-full bg-pink shadow-lg text-white hover:opacity-70',
        props.className
      )}
    >
      {props.text}
    </button>
  );
};

export default Button;

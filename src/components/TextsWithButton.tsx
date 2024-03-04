import Button from './UI/Button';

type Props = {
  title: string;
  desc?: string;
};

const TextsWithButton = ({ title, desc }: Props) => {
  return (
    <div className="flex flex-col text-center gap-8 justify-center items-center">
      <h2 className="font-bold font-Poppins text-xl sm:text-4xl">{title}</h2>
      {desc && <p className="max-w-lg">{desc}</p>}
      <Button text="Get Started For Free" />
    </div>
  );
};

export default TextsWithButton;

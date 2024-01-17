type Props = {
  title: string;
  desc?: string;
};

const TextsWithButton = ({ title, desc }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {desc && <p>{desc}</p>}
      <button>Get Started</button>
    </div>
  );
};

export default TextsWithButton;

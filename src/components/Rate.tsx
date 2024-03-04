type Props = {
  icon: string;
  alt: string;
  title: string;
  desc: string;
};

const Rate = (props: Props) => {
  return (
    <div>
      <img src={props.icon} alt={props.alt} />
      <h2 className="text-6xl md:text-7xl font-bold">{props.title}</h2>
      <p className="md:text-lg text-very-Dark-Cyan opacity-70 text-center mt-2">
        {props.desc}
      </p>
    </div>
  );
};

export default Rate;

import { socials } from './shared/consts';

const Socials = () => {
  return (
    <div className="flex max-w-80 max-[767px]:m-auto gap-3">
      {socials.map((item, index) => (
        <a key={index} href={item.link}>
          <div className="cursor-pointer border border-white rounded-full p-3">
            <img
              className="invert brightness-0 w-6 h-6"
              src={item.icon}
              alt={item.alt}
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default Socials;

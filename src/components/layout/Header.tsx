import SectionWrapper from '../SectionWrapper';
import logo from '../../assets/images/logo.svg';
import Button from '../UI/Button';

const Header = () => {
  return (
    <SectionWrapper>
      <div className="py-12 flex gap-3 items-center justify-between">
        <img
          className="max-[500px]:w-2/5 min-w-[150px]"
          src={logo}
          alt="logo"
        />
        <Button
          className="bg-transparent text-pink border-pink border-2 px-8 py-2 max-[500px]:py-1 max-[500px]:px-3"
          text="Try It Free"
        />
      </div>
    </SectionWrapper>
  );
};

export default Header;

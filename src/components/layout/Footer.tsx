import { footer } from '../shared/consts';
import logo from '../../assets/images/logo.svg';
import SectionWrapper from '../SectionWrapper';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { useInput } from '../shared/hooks/UseInput';
import Socials from '../Socials';

const Footer = () => {
  const { left } = footer;
  const { right } = footer;

  const {
    value: emailValue,
    hasError: emailHasError,
    onChange: emailOnChange,
    onBlur: emailOnBlur,
    onFocus: emailOnFocus,
  } = useInput((email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));

  return (
    <div className="bg-very-Dark-Cyan py-20 text-white">
      <SectionWrapper>
        <div className="flex justify-between items-center gap-20 md:gap-5 flex-col-reverse md:flex-row">
          <div className="max-w-80 mb-8">
            <img
              className="saturate-0 invert brightness-0"
              src={logo}
              alt="huddle"
            />
            <p className="mt-3 mb-5">{left.desc}</p>
            <div>
              {left.icons.map((icon, index) => {
                return (
                  <div className="flex gap-5" key={index}>
                    <img src={icon.icon} alt={icon.alt} />
                    <p>{icon.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="max-w-80">
              <h3 className="text-3xl font-bold">{right.title}</h3>
              <p className="mt-3">{right.desc}</p>
            </div>
            <div className="flex flex-wrap justify-end md:justify-start gap-5 mt-5">
              <Input
                value={emailValue}
                onChange={(e) => emailOnChange(e)}
                hasError={emailHasError}
                onBlur={emailOnBlur}
                onFocus={emailOnFocus}
              />
              <Button className="rounded sm:py-2 sm:px-5" text="Subscribe" />
            </div>
          </div>
        </div>
        <Socials />
      </SectionWrapper>
    </div>
  );
};

export default Footer;

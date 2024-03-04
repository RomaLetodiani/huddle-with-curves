import SectionWrapper from '../SectionWrapper';
import TextsWithButton from '../TextsWithButton';
import hero from '../../assets/images/hero.svg';
import Rate from '../Rate';
import { Rates } from '../shared/consts';
import useMediaQuery from '../shared/hooks/UseMediaQuery';
import curveBottom from '../../assets/images/bg-section-top-desktop-1.svg';
import curveBottomMobile from '../../assets/images/bg-section-top-mobile-1.svg';

const Hero = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div className="relative pb-24 md:pb-44">
      <SectionWrapper>
        <div className="p-5 md:px-20">
          <TextsWithButton
            title="Build The Community Your Fans Will Love"
            desc="Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion."
          />
          <div className="m-auto w-4/5 my-10 md:my-20">
            <img className="w-full" src={hero} alt="hero banner" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center gap-10 md:gap-20">
          {Rates.map(({ id, ...rest }) => (
            <Rate key={id} {...rest} />
          ))}
        </div>
      </SectionWrapper>
      <div className="absolute -bottom-1 w-full">
        <img
          className="w-full h-full max-h-44 object-cover"
          src={isMobile ? curveBottomMobile : curveBottom}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;

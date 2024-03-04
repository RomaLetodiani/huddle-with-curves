import TextsWithButton from '../TextsWithButton';
import useMediaQuery from '../shared/hooks/UseMediaQuery';
import curveBottom from '../../assets/images/bg-footer-top-desktop.svg';
import curveBottomMobile from '../../assets/images/bg-footer-top-mobile.svg';
import curveTop from '../../assets/images/bg-section-bottom-desktop-2.svg';
import curveTopMobile from '../../assets/images/bg-section-bottom-mobile-2.svg';

const Bottom = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div className="relative">
      <div className="absolute -top-1 w-full">
        <img
          className="w-full h-full max-h-44 object-cover"
          src={isMobile ? curveTopMobile : curveTop}
          alt=""
        />
      </div>
      <div className="px-20 py-32 md:p-52">
        <TextsWithButton title="Ready To Build Your Community?" />
      </div>
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

export default Bottom;

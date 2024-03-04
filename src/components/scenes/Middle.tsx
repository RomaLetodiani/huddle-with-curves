import SectionWrapper from '../SectionWrapper';
import { middle } from '../shared/consts';
import useMediaQuery from '../shared/hooks/UseMediaQuery';
import curveTop from '../../assets/images/bg-section-bottom-desktop-2.svg';
import curveTopMobile from '../../assets/images/bg-section-bottom-mobile-2.svg';
import curveBottom from '../../assets/images/bg-section-top-desktop-2.svg';
import curveBottomMobile from '../../assets/images/bg-section-top-desktop-2.svg';

const Middle = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div>
      {middle.map((section, index) => {
        return (
          <div
            key={section.id}
            className={`${index != 1 && 'bg-very-pale-blue'} ${
              index == 1 && 'max-[500px]:py-28 py-40 relative'
            }`}
          >
            {index == 1 && (
              <div className="absolute -top-1 w-full">
                <img
                  className="w-full h-full max-h-44 object-cover"
                  src={isMobile ? curveTopMobile : curveTop}
                  alt=""
                />
              </div>
            )}
            <SectionWrapper>
              <div className="flex justify-between items-center gap-5">
                <div className="max-w-[450px]">
                  <h2 className="font-bold md:text-3xl">{section.title}</h2>
                  <p className="text-xs md:text-sm">{section.desc}</p>
                </div>
                <div className="max-w-[450px]">
                  <img src={section.image} alt={section.alt} />
                </div>
              </div>
            </SectionWrapper>
            {index == 1 && (
              <div className="absolute -bottom-1 w-full">
                <img
                  className="w-full h-full max-h-44 object-cover"
                  src={isMobile ? curveBottomMobile : curveBottom}
                  alt=""
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Middle;

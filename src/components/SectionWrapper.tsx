const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1440px] mx-auto xl:px-20 md:px-10 px-6">
      {children}
    </div>
  );
};

export default SectionWrapper;

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center mb-8 px-2">
      <h4 className="text-2xl md:text-3xl  font-semibold text-themePrimary">
        {title}
      </h4>
      <div className="h-[2px] my-4 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 bg-themePrimary mx-auto">
        <span className="w-[10px] h-[10px] bg-themePrimary inline-block rotate-45 relative -top-[11px]"></span>
      </div>
      <p className="text-xl dark:text-white max-w-lg mx-auto">{subTitle}</p>
    </div>
  );
};
export default SectionTitle;

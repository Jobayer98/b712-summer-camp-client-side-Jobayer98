const LanguageCard = ({ lang }) => {
  return (
    <div className="flex gap-6">
      <div
        className="w-[285px] h-[400px] bg-cover rounded relative"
        style={{
          backgroundImage:
            "url('https://img2.storyblok.com/filters:format(webp)/f/89778/564x900/4bc981b22b/ca_00_00_1.jpg')",
        }}
      >
        <div className="absolute text-white font-semibold bottom-4 left-16">
          <p>Learn a language abroad</p>
          <h1 className=" text-2xl -mt-1">{lang}</h1>
        </div>
      </div>
    </div>
  );
};

export default LanguageCard;

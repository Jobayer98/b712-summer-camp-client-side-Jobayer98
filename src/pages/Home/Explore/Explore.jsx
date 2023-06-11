import { Tabs } from "antd";
import LanguageCard from "./LanguageCard";
const Explore = () => {
  const lists = [
    { lang: "English" },
    { lang: "French" },
    { lang: "German" },
    { lang: "Arabic" },
    { lang: "Portuguese" },
    { lang: "Hindi" },
  ];

  const languages = [
    [
      {
        name: "1",
      },
      {
        name: "2",
      },
      {
        name: "3",
      },
    ],
    [
      {
        name: "1",
      },
    ],
  ];
  return (
    <div className="mt-16">
      <h1 className="text-center text-3xl mb-6">Popular Language</h1>
      <Tabs
        className="flex justify-center items-center h-[500px]"
        defaultActiveKey="1"
        centered
        items={lists.map((item, i) => {
          const id = String(i + 1);
          return {
            label: `${item.lang}`,
            key: id,
            children: (
              <div className="flex gap-4">
                {languages.map((item) =>
                  item.map((i) => {
                    <LanguageCard key={i.name} lang={item.lang} />;
                  })
                )}
              </div>
            ),
          };
        })}
      />
    </div>
  );
};

export default Explore;

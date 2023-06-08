import { Tabs } from "antd";
import LanguageCard from "./LanguageCard";
const Explore = () => {
  const lists = [
    { lang: "English", content: "lorem" },
    { lang: "French" },
    { lang: "German" },
  ];
  return (
    <div className="mt-16">
      <h1 className="text-center text-3xl mb-6">Explore destinations</h1>
      <Tabs
        className="flex justify-center items-center h-[500px]"
        defaultActiveKey="1"
        centered
        items={lists.map((item, i) => {
          const id = String(i + 1);
          return {
            label: `${item.lang}`,
            key: id,
            children: <LanguageCard lang={item.lang} />,
          };
        })}
      />
    </div>
  );
};

export default Explore;

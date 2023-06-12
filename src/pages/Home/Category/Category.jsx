import Container from "../../../components/shared/Container";
const Category = () => {
  const category = [
    {
      id: 1,
      lang: "French",
      img: "https://img-c.udemycdn.com/course/240x135/2738548_33dc_7.jpg",
      des: "4 hours course time",
    },
    {
      id: 2,
      lang: "English",
      img: "https://img-b.udemycdn.com/course/240x135/2749796_9986_20.jpg",
      des: "2 hours course time",
    },
    {
      id: 3,
      lang: "German",
      img: "https://img-b.udemycdn.com/course/240x135/5013738_3a75_5.jpg",
      des: "6 hours course time",
    },
    {
      id: 4,
      lang: "Spanish",
      img: "https://img-b.udemycdn.com/course/240x135/46738_c270_96.jpg",
      des: "4 hours course time",
    },
  ];

  return (
    <Container>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 my-16">
        {category.map((item) => (
          <div
            key={item.id}
            className="w-[250px] h-[280px] shadow border-[1px] flex flex-col justify-evenly items-center rounded-md"
          >
            <figure>
              <img
                className="h-28 w-28 rounded-full"
                loading="lazy"
                src={item.img}
                alt={item.lang}
              />
            </figure>
            <div className="text-center">
              <h2 className="font-semibold text-gray-600">{item.lang}</h2>
              <p className="text-xs mt-2 text-gray-400">{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Category;
